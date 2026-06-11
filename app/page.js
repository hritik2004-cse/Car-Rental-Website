import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import factBg from "./assets/HeroSection/factSectionBg.svg";
import { factData } from "./assets/Data/HeroSection/factData";
import { carData } from "./assets/Data/HeroSection/heroCarData";
import hero_banner from "./assets/HeroSection/hero-section-bg.png";
import { featuredata } from "./assets/Data/HeroSection/featureData";
import { featuredata2 } from "./assets/Data/HeroSection/featureData2";
import featureSectionBg from "./assets/HeroSection/featureSectionBg.png";
import {
  CarCard,
  CarImage,
  CarData,
  CarFeatures,
  CarButton,
} from "./components/CarCard";

export default function Home() {
  return (
    <div className="w-full">
      <Nav />
      <div className="w-full mt-7">
        <div className="mx-auto w-[90%]">
          {/* hero div  */}
          <div className="w-full h-[80vh] relative">
            <Image
              src={hero_banner}
              height={100}
              width={200}
              alt="hero banner"
              className="w-full h-full rounded-3xl object-cover"
              loading="eager"
            />
            <div className="flex items-center justify-between w-full h-full absolute top-0 py-10 px-20">
              <div className="w-[60%]">
                <h1 className="text-white text-7xl font-bold">
                  Experience the road like never before
                </h1>
                <p className="">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus
                  porttitor tristique et gravida. Quis nunc interdum gravida
                  ullamcorper
                </p>
                <Link href="/vehicles">
                  <button className="bg-[#ff9e0c]">view all cars</button>
                </Link>
              </div>
              {/* from model */}
              <form className="w-[40%] bg-white rounded-xl p-5">
                <h2 className="text-center font-bold text-2xl mb-3">
                  Book your car
                </h2>
                {/* car type */}
                <select
                  className="w-full bg-[#fafafa] p-2 font-medium"
                  required
                >
                  <option default value="none" className="text-md capitalize">
                    Car Type
                  </option>
                  <option value="sedan" className="text-md capitalize">
                    sedan
                  </option>
                  <option value="sport" className="text-md capitalize">
                    sport
                  </option>
                  <option value="suv" className="text-md capitalize">
                    suv
                  </option>
                  <option default value="van" className="text-md capitalize">
                    van
                  </option>
                </select>
                {/* place of rental */}
                <select className="w-full bg-[#fafafa] p-2 font-medium mt-2">
                  <option default value="none">
                    Place of rental
                  </option>
                  <option value="delhi">delhi</option>
                  <option value="mumbai">mumbai</option>
                  <option value="pune">pune</option>
                  <option value="jaipur">jaipur</option>
                </select>
                {/* place of return */}
                <select className="w-full bg-[#fafafa] p-2 font-medium mt-2">
                  <option default value="none">
                    Place of return
                  </option>
                  <option value="delhi">delhi</option>
                  <option value="mumbai">mumbai</option>
                  <option value="pune">pune</option>
                  <option value="jaipur">jaipur</option>
                </select>
                <div className="w-full bg-[#fafafa] p-2 font-medium mt-2">
                  <input
                    type="date"
                    id="rental-date"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="w-full bg-[#fafafa] rounded-lg px-4 py-3 mt-2">
                  <input
                    type="date"
                    id="rental-date"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <input
                  type="submit"
                  value="Book now"
                  className="bg-[#ff9e0c] w-full py-2 mt-1 rounded-lg text-white font-medium text-lg"
                />
              </form>
            </div>
          </div>
          {/* feature block */}
          <div className="w-full flex items-center flex-wrap md:flex-nowrap justify-between gap-4 my-8">
            {featuredata.map((data) => (
              <div
                className="flex flex-col items-center justify-center shadow-lg p-5 rounded-lg"
                key={data.id}
              >
                <data.icon className="text-4xl lg:text-6xl" />
                <p className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                  {data.name}
                </p>
                <p className="font-normal text-black/70 text-sm md:text-md lg:text-lg text-center mt-2">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
          {/* feature block 2 */}
          <div className="flex flex-wrap md:flex-nowrap w-full items-center justify-center gap-4 md:gap-8 h-auto md:h-[80vh] my-4 md:my-8">
            <div className="h-full w-full md:w-[50%]">
              <Image
                src={featureSectionBg}
                alt="feature section"
                width={200}
                height={100}
                className="h-full w-full object-cover rounded-4xl"
                loading="lazy"
              />
            </div>
            <div className="h-full flex flex-col justify-between items-start w-full md:w-[50%]">
              {featuredata2.map((data) => (
                <div className="" key={data.id}>
                  <div className="flex items-center justify-start gap-2">
                    <p className="h-6 w-6 lg:h-8 lg:w-8 bg-[#5937E0] rounded-full text-white flex items-center justify-center font-bold text-sm md:text-md lg:text-lg">
                      {data.id}
                    </p>
                    <h2 className="text-md md:text-lg lg:text-xl font-bold">
                      {data.name}
                    </h2>
                  </div>
                  <p className="text-sm md:text-md lg:text-lg text-black/50 m-2 md:mt-7">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* car block */}
          <div className="my-8">
            <div className="w-full flex items-center justify-between gap-2 md:gap-0">
              <h2 className="font-bold text-2xl md:text-2xl lg:text-4xl">
                Choose the car that suits you
              </h2>
              <div className="flex items-center justify-center gap-1 md:gap-2 bg-[#5937E0] text-white px-5 py-2 rounded-lg capitalize text-xs md:text-md lg:text-lg font-medium hover:shadow-lg hover:bg-[#5937e0]/90 active:bg-[#5937e0]/90">
                <Link
                  href="/vehicles"
                  className="flex items-center justify-center gap-1"
                >
                  <span className="hidden md:block">read</span> more
                </Link>
                <FaArrowRightLong />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-4">
              {carData.map((car) => (
                <CarCard key={car.id}>
                  <CarImage src={car.image} alt={car.name} />
                  <CarData
                    name={car.name}
                    type={car.type}
                    charges={car.charges}
                  />
                  <CarFeatures
                    gear={car.gear}
                    fuel={car.fuel}
                    model={car.model}
                  />
                  <CarButton id={car.id} />
                </CarCard>
              ))}
            </div>
          </div>
          {/* fact section */}
          <div
            className="w-full h-[60vh] my-8 rounded-2xl py-8 px-20 shadow-xl bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-evenly"
            style={{
              backgroundImage: `url(${factBg.src})`,
            }}
          >
            <h2 className="text-white text-5xl font-bold">Fact in Numbers</h2>
            <p className="text-white text-center text-md font-medium max-w-2xl">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
              fermentum
            </p>
            <div className="grid grid-cols-4 gap-15 w-full max-w-5xl">
              {factData.map((fact) => (
                <div className="flex items-center just bg-white rounded-lg w-full max-w-5xl p-4 gap-6" key={fact.id}>
                  <div className="bg-[#ff9e0c] h-15 w-15 rounded-lg flex items-center justify-center text-white">
                    <fact.icon className="text-white font-bold text-4xl"/>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{fact.stat}+</h2>
                    <p className="text-black/60 text-md capitalize">{fact.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
