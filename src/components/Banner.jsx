import React from "react";
import banner from "../assets/Rectangle 4.png";
import img1 from "../assets/image 1.png";
import '../../src/index.css'
import star from '../assets/Vector.png'

const Banner = () => {
  return (
    <div className="relative bg-red-600 w-full h-screen">
      <div
        className="bg-cover bg-center h-screen w-full absolute top-0 "
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="absolute top-32 left-8 md:left-36 flex w-full md:w-10/12 p-6 md:flex-row flex-col justify-center items-center -translate-x-8 px-8">
        <div className="flex flex-col md:pt-32 z-10 md:translate-x-32 gap-6 w-full">
          <h2 className="md:text-9xl text-5xl text-white md:bg-gradient-to-r md:from-transparent md:from-10% md:via-transparent md:to-red-800 md:w-[850px] py-6">
            Taste the authentic Saudi cuisine
          </h2>
          <p className="text-white md:text-xl w-7/12">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>
          <button className="btn bg-[#FEBF00] rounded-sm border-none w-32">
            Explore Menu
          </button>
        </div>
        <div className="md:mt-0 mt-10 text-center items-center mx-auto">
          <img className="md:w-[1250px]" src={img1} alt="" />
            <img className="absolute right-2 md:top-0 top-96" src={star} alt="" />
          <div className="btn rounded-full bg-yellow-500 border-none h-32 w-32 text-xl absolute right-5 md:right-0 bottom-3">
            <p className="border-2 rounded-full h-24 p-4 border-red-800 border-dashed">TODAY OFFER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
