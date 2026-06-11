import React from 'react'
import Nav from '../components/Nav';
import CarSection from '../components/CarSection';
import Footer from '../components/Footer';
import CarLogoSection from '../components/CarLogoSection';

const page = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Nav />
      <div className="w-full mt-7">
        <div className="mx-auto w-[90%]">
          <CarSection />
          <CarLogoSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page