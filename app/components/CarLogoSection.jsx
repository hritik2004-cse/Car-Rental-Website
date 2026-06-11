import React from 'react';
import { carIcon } from '../assets/Data/Vehicle/carLogoSectionData';

const CarLogoSection = () => {
  return (
    <div className='bg-[#eeeeee] flex items-center justify-between p-6 my-6 rounded-xl shadow-xl'>
        {
            carIcon.map((icon) => (
                <icon.name key={icon.id} title={icon.bName} className='text-8xl'/>
            ))
        }
    </div>
  )
}

export default CarLogoSection;
