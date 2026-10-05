"use client";

import { signIn, signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,

  TextField,
} from "@heroui/react";

const SignupPage = () => {
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    
  const { data: resdata, error } = await signUp.email({
    name: data.name, // required, The name of the user.
    email: data.email, // required, The email address of the user.
    password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
   
    callbackURL: "/", // An optional URL to redirect to after the user signs up.
});

};
const handlegoogle = async () => {
  const data = await signIn.social({
provider: "google",
});

console.log(data);

}


    return (
        <div className='max-w-7xl mx-auto mt-52'>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
          
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
            <Button onClick={handlegoogle}>google</Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default SignupPage;