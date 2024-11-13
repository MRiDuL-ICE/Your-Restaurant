import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import burger from "../assets/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1 (1).png";
import pizza from "../assets/pizza 1.png";
import fries from "../assets/french-fries 1.png";
import shrimp from "../assets/fried-shrimp-prawn-cake-white-plate 1.png";

const Items = () => {
  return (
    <div className=" bg-red-50">
      <div className="pt-20 px-10 md:px-20 mx-auto mb-20 w-screen md:w-10/12">
      <div className="flex justify-between items-center">
        <div>
          <li className="list-[square] text-red-700">
            Crispy, Every Bite Taste
          </li>
          <h2 className="md:text-7xl text-4xl text-black mt-4">POPULAR FOOD ITEMS</h2>
        </div>
        <div className="md:flex gap-2 hidden">
          <span className="w-12 h-12 mx-auto bg-white flex justify-center items-center rounded-full shadow-lg p-2 my-auto">
            <MdKeyboardArrowLeft className="text-3xl w-8 h-8" />
          </span>
          <span className="w-12 h-12 mx-auto bg-white flex justify-center items-center rounded-full shadow-lg p-2 my-auto">
            <MdKeyboardArrowRight className="text-red-800 text-3xl w-8 h-8" />
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-10">
        <div className=" shadow-lg rounded-lg my-24 p-10 bg-white">
          <div className="flex flex-col w-full mx-auto">
            <img className="w-full" src={burger} alt="" />
            <div className="border-2 border-b w-10 mx-auto border-red-900 h-[1px]"></div>
          </div>
          <div className="w-full mx-auto text-center py-4">
          <h2 className="text-2xl font-bold my-4">VEGETABLES BURGER</h2>
          <p>Barbecue Italian cuisine pizza</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg my-24 p-10 bg-white hidden md:block">
          <div className="flex flex-col w-full mx-auto">
            <img className="w-4/6 mx-auto" src={pizza} alt="" />
            <div className="border-2 border-b w-10 mx-auto border-red-900 h-[1px]"></div>
          </div>
          <div className="w-full mx-auto text-center py-4">
          <h2 className="text-2xl font-bold my-4">SPACIAL PIZZA</h2>
          <p>Barbecue Italian cuisine pizza</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg my-24 p-10 bg-white hidden md:block">
          <div className="flex flex-col w-full mx-auto">
            <img className="w-full" src={fries} alt="" />
            <div className="border-2 border-b w-10 mx-auto border-red-900 h-[1px]"></div>
          </div>
          <div className="w-full mx-auto text-center py-4">
          <h2 className="text-2xl font-bold my-4">SPACIAL FRENCE FRIES</h2>
          <p>Barbecue Italian cuisine</p>
          </div>
        </div>
        <div className=" shadow-lg rounded-lg my-24 p-10 bg-white hidden md:block">
          <div className="flex flex-col w-full mx-auto">
            <img className="w-full" src={shrimp} alt="" />
            <div className="border-2 border-b w-10 mx-auto border-red-900 h-[1px]"></div>
          </div>
          <div className="w-full mx-auto text-center py-4">
          <h2 className="text-2xl font-bold my-4">CUISINE CHICKEN</h2>
          <p>Japanese Cuisine Chicken</p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex w-24 mx-auto gap-2 z-10 top-0 -translate-y-10">
          <span className="w-12 h-12 mx-auto bg-white flex justify-center items-center rounded-full shadow-lg p-2 my-auto">
            <MdKeyboardArrowLeft className="text-3xl w-8 h-8" />
          </span>
          <span className="w-12 h-12 mx-auto bg-white flex justify-center items-center rounded-full shadow-lg p-2 my-auto">
            <MdKeyboardArrowRight className="text-red-800 text-3xl w-8 h-8" />
          </span>
        </div>
    </div>
    </div>
  );
};

export default Items;
