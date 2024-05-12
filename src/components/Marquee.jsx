import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";

function Marquee() {
  const [scrollY, setScrollY] = useState(0);

  

  useEffect(() => {  // For Parallax Effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
     className="relative"> 
      <div
      style={{
        backgroundImage: `url('your-background-image.jpg')`,
        transform: `translateY(-${scrollY * 0.5}px)`, // Scroll-up effect
      }}
      className="w-full absolute py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] "
    >
      <div className=" flex items-center  whitespace-nowrap  border-t-2 border-b-2 border-zinc-300">
        <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="text-[15vw] pr-7   font-bold leading-none font-[Montserrat]  uppercase mb-10 pt-10  ">
           We are ochi  
        </motion.h1>
        <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="text-[15vw] pl-7  font-bold leading-none font-[Montserrat]  uppercase mb-10 pt-10  ">
            We are ochi 
        </motion.h1>
      </div>
    </div>
    </div>
  );
}

export default Marquee;
