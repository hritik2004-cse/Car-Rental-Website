import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'
import Link from 'next/link';
import { navLinks } from '../assets/Data/navLinks';
import { FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='w-full h-auto shadow-lg py-5'>
      <div className='w-[90%] mx-auto flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <Image src={logo} height={100} width={200} alt='logo' className='h-10 w-15' loading='eager'/>
          <p className="text-2xl capitalize font-bold">car rent</p>
        </div>
        <div className='flex items-center gap-5 font-normal text-sm md:text-md lg:text-lg'>
          {
            navLinks.map((item) => (
              <Link key={item.id} href={item.route} className='px-3'>
                {item.route_name}
              </Link>
            ))  
          }
        </div>
        <div className="flex items-center gap-2">
          <div className='bg-[#5a37e0] p-2 rounded-full'>
            <FaPhoneAlt className='text-white' size={22}/>
          </div>
          <div>
            <p className="text-md capitalize ">need help?</p>
            <p className='text-sm md:text-md lg:text-lg font-medium'>+977 9828209052</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav