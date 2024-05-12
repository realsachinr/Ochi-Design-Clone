import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
function LandingPage() {

  
  
  return (
    <div   className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20  ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker   ">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div  initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1} } 
                   className="w-[9vw] h-[5.7vw] flex items-center  ">
                    <img
                    className="rounded-lg"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                {index === 2 && <h1 className=""></h1>}
                <h1 className="font-[Roboto] tracking-tighter font-semibold text-[8vw]  leading-[6.5vw] uppercase">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-20 py-5 px-20 flex justify-between ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light leading-none tracking-tight"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5  ">
          <div className="px-5 py-2 border-[2px] border-zinc-500 text-sm  uppercase text-md   rounded-full ">
            Start the project
          </div>
          <div className=" border-[2px] w-10 h-10 flex items-center justify-center   border-zinc-500  rounded-full ">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
