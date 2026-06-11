'use client'
import Image from 'next/image';
import { LuFuel } from "react-icons/lu";
import React, { useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { cars } from '../assets/Data/Vehicle/carsData';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination";
import { CarCard, CarImage, CarData, CarFeatures, CarButton } from './CarCard';

const CarSection = () => {

    const [selectedType, setSelectedType] = useState('all');
    const types = ['all', ...new Set(cars.map(car => car.type))];
    const filteredCarstype =
        selectedType === 'all'
            ? cars
            : cars.filter(car => car.type === selectedType);

    return (
        <div className="w-full my-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center py-2 md:py-3 lg:py-4">Select a Vehicle Group</h1>
            <div className="flex flex-wrap md:flex-nowrap w-full items-center justify-center gap-3 lg:gap-4 py-2 md:py-3">
                {
                    types.map((types) => (
                        <p className={`rounded-full px-5 lg:px-6 py-3 capitalize cursor-pointer text-sm md:text-md lg:text-lg font-medium ${selectedType === types ? 'bg-[#5937e0] text-white' : 'bg-[#eeeeee] text-black'}`} key={types} onClick={() => setSelectedType(types)}>{types}</p>
                    ))
                }
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-4'>
                {
                    filteredCarstype.map((car) => (
                        <CarCard key={car.id}>
                            <CarImage src={car.image} alt={car.name} />
                            <CarData name={car.name} type={car.type} charges={car.charges} />
                            <CarFeatures gear={car.gear} fuel={car.fuel} model={car.model} />
                            <CarButton id={car.id} />
                        </CarCard>
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