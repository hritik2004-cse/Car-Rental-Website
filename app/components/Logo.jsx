import React from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className="flex items-center gap-1 md:gap-2">
      <Image src={logo} className='h-10 w-15' height={100} width={100} alt='My Website Logo' loading='eager' />
      <h1 className="text-2xl lg:text-3xl capitalize font-extrabold font-mono">carvo</h1>
    </Link>
  )
}

export default Logo