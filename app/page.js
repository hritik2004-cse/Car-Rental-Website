import Image from "next/image";
import hero_banner from "./assets/hero-section-bg.png";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from "next/link";
import { featuredata } from "./assets/Data/featureData";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
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
          <div className="w-full flex items-center flex-wrap md:flex-nowrap justify-between gap-4 mt-8">
            {featuredata.map((data) => (
              <div
                className="flex flex-col items-center justify-center shadow-lg p-5 rounded-lg"
                key={data.id}
              >
                <data.icon className="text-4xl lg:text-6xl"/>
                <p className="font-bold text-lg md:text-xl lg:text-2xl capitalize">{data.name}</p>
                <p className="font-normal text-black/70 text-sm md:text-md lg:text-lg text-center mt-2">
                  {data.description}
                </p>  
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
