import React, { useState } from "react";

function Feature() {

  const [isHovered, SetisHovered] = useState(false);
  const [isHovered1, SetisHovered1] = useState(false);
  const [isHovered2, SetisHovered2] = useState(false);
  const [isHovered3, SetisHovered3] = useState(false);

  function handleHover() {
    SetisHovered(true);
  }
  function  handleMouseLeave() {
    SetisHovered(false);
  }

  function handleHover1() {
    SetisHovered1(true);
  }
  function  handleMouseLeave1() {
    SetisHovered1(false);
  }
  function handleHover2() {
    SetisHovered2(true);
  }
  function  handleMouseLeave2() {
    SetisHovered2(false);
  }

  function handleHover3() {
    SetisHovered3(true);
  }
  function  handleMouseLeave3() {
    SetisHovered3(false);
  }
  

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800  pb-20">
        <h1 className="text-7xl font-[Signika] tracking-tight ">
          Featured Project
        </h1>z
      </div>

      <div className="px-20">
        <div className="w-full relative flex gap-10 mt-10 mb-20">
            {/* Box 1 */}
          <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="w-1/2 h-[75vh]  relative ">
           
           {isHovered && <h1 className="absolute left-full -translate-x-1/2 text-[#CDEA68] -translate-y-1/2 top-1/2   z-[9] text-8xl   font-[Roboto] leading-none tracking-tighter font-semibold ">
              {"FYDE".split("").map((item, index) => (
                <span
                  className="flex flex-col  animate-bounce"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </h1> }
           
            
            <div className="w-full h-full  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="flex gap-4 ">
              {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="py-1 border px-2 mt-2 mb-2 rounded-3xl  "
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
          {/* Box 2  */}
          <div onMouseEnter={handleHover1} onMouseLeave={handleMouseLeave1}   className="w-1/2 h-[75vh] relative">
           
            {
              isHovered1 && <h1 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68]  00 z-[9] text-8xl  font-[Roboto] leading-none tracking-tighter font-semibold ">
              {"VISE".split("").map((item, index) => (
                <span
                  className="flex flex-col  animate-ping"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </h1> 
            }
            
            <div className="w-full h-full overflow-hidden rounded-xl ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-4 ">
              {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
                <p
                  key={index}
                  className="py-1 border px-2 mt-2 mb-2 rounded-3xl  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full relative flex gap-10 mt-10">
        {/* Box 3  */}
          <div onMouseEnter={handleHover2} onMouseLeave={handleMouseLeave2} className="w-1/2 h-[75vh]  relative ">
            {isHovered2 && <h1 className="absolute left-full -translate-x-1/2 text-[#CDEA68] -translate-y-1/2 top-1/2   z-[9] text-8xl   font-[Roboto] leading-none tracking-tighter font-semibold ">
              {"TRAWA".split("").map((item, index) => (
                <span
                  className="flex flex-col  animate-bounce"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </h1>}
            <div
             className="w-full h-full   rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>

            <div className="flex gap-4 ">
              {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map(
                (item, index) => (
                  <p
                    key={index}
                    className="py-1 border px-2 mt-2 mb-2 rounded-3xl  "
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
          {/* Box 4  */}
          <div onMouseEnter={handleHover3} onMouseLeave={handleMouseLeave3} className="w-1/2 h-[75vh] relative">
            {isHovered3 && <h1 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2  text-[#CDEA68]  00 z-[9] text-5xl  font-[Roboto] leading-none tracking-tighter font-semibold ">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <span
                  className="flex flex-col    animate-ping"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </h1>}
            <div className="w-full h-full overflow-hidden rounded-xl ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>

            <div className="flex gap-4 ">
              {["BRANDED TEMPLATE"].map((item, index) => (
                <p
                  key={index}
                  className="py-1 border px-2 mt-2 mb-2 rounded-3xl  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
      <button className="px-10  flex mt-20 uppercase gap-10 items-center justify-center  py-4 font-bold  bg-white rounded-full text-zinc-800 ">
            VIEW ALL CASE STUDIES
            <div className="w-2 h-2 bg-zinc-800 rounded-full "></div>
          </button>
      </div>
    </div>
  );
}

export default Feature;
