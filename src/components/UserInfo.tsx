"use client"
import { authClient, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserInfo = () => {
  const router = useRouter();
  const { data: session } = useSession();

  

  const handlelogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload()
          router.push('/');
        },
      },
    });
  };




  return (
    <div>
      {session?.user ? (
        <div className='absolute right-72'>
          <Link href='/profile'>{session.user.name}</Link> <Button onClick={handlelogout}>signout</Button>
        </div>
      ) : (
        <div>
          <div className='flex gap-2 justify-end absolute right-72'>
        <Link href='/sign-in'>    <button className='btn'>সাইন ইন</button></Link>
           <Link href='/sign-up'> <button className='btn bg-red-600 text-white'>সাইন আপ</button></Link>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;