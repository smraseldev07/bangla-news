import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
import UserInfo from './UserInfo';
import Link from 'next/link';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle : "full"
    })

    console.log(date);
    
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='flex items-center gap-3 '>

                <Image className='h-10 w-10' height={50} width={50} alt='logo' src={'/logo.webp'}></Image>
               <div>
                <Link href='/'> <h2>Bangla news 24</h2>
                <p>{date}</p></Link>
               </div>

              <UserInfo></UserInfo>
        </div>
              <Navlinks></Navlinks>

            </div>
            
        );
};

export default Header;