import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FcLike } from "react-icons/fc";
import { year } from '../assets/Data/Footer/yearData';
import { cars } from '../assets/Data/Vehicle/carsData';
import { footerData } from '../assets/Data/Footer/footerData';
import { footerLink } from '../assets/Data/Footer/footerLinks';
import { socialLinks } from '../assets/Data/Footer/socialData';

const Footer = () => {
  return (
    <div className='w-full h-[60vh] border-t-2 border-t-black/10 py-6'>
      <div className="w-[90%] mx-auto flex flex-col items-center justify-between h-full">
        <div className="flex w-full items-center justify-between">
          <Logo />
          {
            footerData.map((item) => (
              <div className="flex items-center justify-center gap-3" key={item.id}>
                <div className="bg-[#FF9E0C] rounded-full p-2">
                  <item.icon className='text-2xl text-white' />
                </div>
                <div>
                  <p className="capitalize text-md font-normal">{item.name}</p>
                  <p className="text-lg font-medium text-black/70">{item.data}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="">
            <p className="text-2xl font-bold capitalize line-clamp-4 max-w-xs">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem turpis euismod. Purus at quisque integer sit. Libero quis sapien tempus pellentesque netus leo feugiat augue ut. Sollicitudin vitae dictum sed vulputate.
            </p>
            <div className="flex items-center justify-start gap-4 mt-3">
              {
              socialLinks.map((data) => (
                <Link key={data.id} href={data.link}>
                    <data.icon title={data.name} className='text-3xl bg-black text-white rounded-full p-1.5'/>
                </Link>
              ))
            }
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-bold capitalize">useful links</h2>
          </div>
            <div className="">
              <h2 className="text-xl font-bold capitalize">vehicles</h2>
            </div>
            <div className="">
              <h2 className="text-xl font-bold capitalize">download app</h2>
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="w-full flex items-center justify-center text-lg font-medium gap-1 text-black/50">&copy; Copyright Carvo {year}. Made with <FcLike /> by Hritik Sharma</p>
        </div>
      </div>
    </div>
  )
}

export default Footer