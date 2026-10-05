
'use client'

import { authClient, useSession } from "@/lib/auth-client";
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

const ProfilePage = () => {
    const { data: session } = useSession();

  const main = session?.user
   const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.location.reload()
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      // Convert FormData to plain object
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      await authClient.updateUser({
   
    name: data.name,
})
      
   
  
  };

  
    
    return (
        <div>
            <p>{main?.name}</p>

              <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
     
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
        
     
        </FieldGroup>
       <Fieldset.Actions>
          <Button type="submit">
          
            Save changes
          </Button>
       
        
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default ProfilePage;