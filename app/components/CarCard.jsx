import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuFuel } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";

const CarCard = ({ children }) => {
    return (
        <div className='grid grid-cols-1 bg-[#eeeeee] p-5 rounded-lg shadow-lg lg:hover:scale-105 transition-all duration-300'>
            {children}
        </div>
    )
}

const CarData = ({ name, type, charges }) => {
    return (
        <div className="flex items-center justify-between my-2">
            <div className="">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-black/50 text-md font-normal capitalize">{type}</p>
            </div>
            <div className="">
                <p className="text-[#5937e0] text-xl font-medium">${charges}</p>
                <p className="text-black/50 text-md font-normal">per day</p>
            </div>
        </div>
    )
}

const CarImage = ({ src, alt }) => {
    return (
        <div className="relative w-full h-52 mb-8">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
            />
        </div>
    )
}

const CarFeatures = ({ gear, fuel, model }) => {
    return (
        <div className="flex items-center justify-between my-2">
            <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                <GiGearStickPattern className='text-xl text-[#5937e0]' />
                <p className="capitalize text-md font-normal text-[#5937e0]">{gear}</p>
            </div>
            <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                <LuFuel className='text-xl text-[#5937e0]' />
                <p className="capitalize text-md font-normal text-[#5937e0]">{fuel}</p>
            </div>
            <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                <SlCalender className='text-xl text-[#5937e0]' />
                <p className="capitalize text-md font-normal text-[#5937e0]">{model}</p>
            </div>
        </div>
    )
}

const CarButton = ({ id }) => {
    return (
        <Link href={`/details/${id}`}>
            <button className="bg-[#5937e0] hover:bg-[#5937e0]/90 w-full py-2 rounded-lg text-white font-medium text-md mt-2 cursor-pointer">
                View Details
            </button>
        </Link>
    )
}

export { CarCard, CarData, CarImage, CarFeatures, CarButton }