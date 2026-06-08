'use client'
import React, { useState } from 'react';
import { cars } from '../assets/Data/carsData';
import Image from 'next/image';
import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination"

const CarSection = () => {

    const [selectedType, setSelectedType] = useState('all');
    const types = ['all', ...new Set(cars.map(car => car.type))];
    const filteredCarstype =
        selectedType === 'all'
            ? cars
            : cars.filter(car => car.type === selectedType);

    return (
        <div className="w-full my-8">
            <h1 className="font-bold text-5xl text-center py-4">Select a Vehicle Group</h1>
            <div className="flex w-full items-center justify-center gap-4 py-3">
                {
                    types.map((types) => (
                        <p className={`rounded-full px-6 py-3 capitalize cursor-pointer ${selectedType === types ? 'bg-[#5937e0] text-white' : 'bg-[#eeeeee] text-black'}`} key={types} onClick={() => setSelectedType(types)}>{types}</p>
                    ))
                }
            </div>
            <div className='w-full grid grid-cols-3 pt-6 gap-4'>
                {
                    filteredCarstype.map((car) => (
                        <div key={car.id} className='grid grid-cols-1 bg-[#eeeeee] p-5 rounded-lg shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="w-full h-52 flex items-center justify-center mb-8">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    className="max-h-full w-auto object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-between my-2">
                                <div className="">
                                    <h2 className="text-md md:text-lg lg:text-xl font-bold">{car.name}</h2>
                                    <p className="text-black/50 text-md font-normal capitalize">{car.type}</p>
                                </div>
                                <div className="">
                                    <p className="text-[#5937e0] text-xl font-medium">${car.charges}</p>
                                    <p className="text-black/50 text-md font-normal">per day</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between my-2">
                                <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                                    <GiGearStickPattern className='text-xl' />
                                    <p className="capitalize text-md font-normal">{car.gear}</p>
                                </div>
                                <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                                    <LuFuel className='text-xl' />
                                    <p className="capitalize text-md font-normal">{car.fuel}</p>
                                </div>
                                <div className="flex items-center justify-center gap-2 border-2 border-black/50 rounded-lg px-2 py-1">
                                    <SlCalender className='text-xl' />
                                    <p className="capitalize text-md font-normal">{car.model}</p>
                                </div>
                            </div>
                            <button className="bg-[#5937e0] hover:bg-[#5937e0]/90 w-full py-2 rounded-lg text-white font-medium text-md mt-2 cursor-pointer">View Details</button>
                        </div>
                    ))
                }
            </div>
            <Pagination className='mt-5'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default CarSection