import React from "react";
import banner from "../assets/Rectangle 4.png";
import img1 from '../assets/image 1.png'

const Banner = () => {
  return (
    <div className="relative bg-red-600 w-full h-screen">
      <div
        className="bg-cover bg-center h-screen w-full absolute top-0 "
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="absolute top-32 left-8 md:left-36 flex w-10/12 p-6  justify-center items-center px-8 -translate-x-8">
        <div className="flex flex-col pt-32 z-10 translate-x-32 gap-6 w-full">
          <h2 className="text-9xl text-white bg-gradient-to-r from-transparent from-10% via-transparent to-red-800 w-[850px] py-6">
            Taste the authentic Saudi cuisine
          </h2>
          <p className="text-white text-xl w-7/12">Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
          <button className="btn bg-[#FEBF00] rounded-sm border-none w-32">Explore Menu</button>
        </div>
        <div >
            <img className="w-[1250px]" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
