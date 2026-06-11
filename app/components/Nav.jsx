'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../assets/Data/Nav/navLinks';
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import Logo from './Logo';

const Nav = () => {

  const [isModelopen, setIsModelOpen] = useState(false);

  return (
    <div className='w-full h-auto shadow-lg py-5'>
      <div className='w-[90%] mx-auto'>
        <div className="hidden w-full lg:flex items-center justify-between">
          <Logo />
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
              <FaPhoneAlt className='text-white' size={22} />
            </div>
            <div>
              <p className="text-md capitalize ">need help?</p>
              <p className='text-sm md:text-md lg:text-lg font-medium'>+977 9828209052</p>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:hidden items-center justify-between">
          <Logo />
          {
            isModelopen ? <FaXmark className='text-2xl' onClick={() => setIsModelOpen(false)} /> : <GiHamburgerMenu className='text-2xl' onClick={() => setIsModelOpen(true)} />
          }

        </div>
      </div>
    </div>
  )
}

export default Nav