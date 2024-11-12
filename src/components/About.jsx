import React from "react";
import aboutright from "../assets/about right.png";
import box from "../assets/box.png";
import tag from "../assets/tag.png";
import delivery from "../assets/Delivery.png";
import aboutback from "../assets/Frame 1707478063.png";
import call from "../assets/call-alt.png";

const About = () => {
  return (
    <div className="pt-20 px-10 md:px-20 md:w-10/12 mx-auto mb-20 w-screen">
      <div>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:w-2/4 w-[400px] bg-no-repeat md:h-[450px] relative">
            <img
              src={aboutback}
              alt="About Background"
              className="md:w-[1250px] h-full"
            />
            <div className="btn bg-white w-fit absolute left-4 -top-6 md:-top-2 mt-10 md:h-[120px] h-fit p-2  hover:bg-white">
              <div className="flex h-full gap-4 md:py-4 md:pt-4 justify-between mx-auto items-center pointer-events-none">
                <p
                  className="radial-progress text-[#FEBF00]"
                  style={{ "--value": 80 }}
                  role="progressbar"
                >
                  <span className="text-lg font-bold text-black">50+</span>
                </p>
                <p className="text-black text-left">Total Page Views</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="flex gap-6">
              <button className="btn bg-red-800 border-none text-white rounded-none">
                About
              </button>
              <button>Experience</button>
              <button>Contact</button>
            </div>
            <div className="border-b w-full border-red-900 h-[0.1px]"></div>
            <div className="mt-5">
              <h2 className="md:text-6xl text-5xl text-black">
                Exceptional culinary experience and delicious food
              </h2>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
            </div>
            <div className="flex gap-10 mt-8">
              <button className="btn bg-[#FEBF00] rounded-none">
                ABOUT MORE
              </button>
              <button className="text-black flex items-center">
                {" "}
                <img src={call} alt="" />
                <span className="font-bold">+88 3426 739 485</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mt-20">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-4 bg-white shadow-lg w-fit h-fit">
              <img src={box} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">FAST DELIVERY</h2>
              <p className="text-lg">Within 30 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-4 bg-white shadow-lg w-fit h-fit">
              <img src={tag} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">ABSOLUTE DINING</h2>
              <p className="text-lg">Best buffet restaurant</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-4 bg-white shadow-lg w-fit h-fit">
              <img src={delivery} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">PICKUP DELIVERY</h2>
              <p className="text-lg">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block mt-96 right-0 top-3/4">
        <img src={aboutright} alt="" />
      </div>
    </div>
  );
};

export default About;
