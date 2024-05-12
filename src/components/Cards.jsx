import React from "react";

function Cards() {
  return (
    <div className="w-full items-center px-32 flex gap-5 h-screen bg-zinc-900 ">
      <div className="w-1/2  h-[50vh]">
        <div className="w-full relative flex items-center justify-center rounded-xl  h-full  bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute border-[#CDEA68]   px-2 py-1 border-2  text-[#CDEA68] left-10 bottom-10 rounded-full">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="w-1/2 h-[50vh] gap-5 flex ">
        <div className="w-1/2 relative flex items-center justify-center   rounded-xl h-full  bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute border-[#fff]   px-2 py-1 border-2  text-[#fff] left-10 bottom-10 rounded-full">
          Rating 5.0 on Clutch
          </button>
        </div>
        <div className="w-1/2 relative flex items-center justify-center  rounded-xl h-full  bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute border-[#fff]   px-2 py-1 border-2  text-[#fff] left-10 bottom-10 rounded-full">
          Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
