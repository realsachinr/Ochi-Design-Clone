import React from "react";
function About() {
  return (
    <div className="w-full  bg-[#CDEA68]   py-20 rounded-tl-3xl rounded">
      <h1 className="font-[Signika] leading-[3rem] px-16 pb-20   text-gray-800 max-w-[80rem] text-5xl ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="border-b-2 border-gray-800 "></div>

      <div className="text-gray-800 text-[18px] flex py-11 px-16   justify-between">
        <div>
          <p>What you can expect:</p>
        </div>

        <div className="flex flex-col gap-6 leading-6 text-justify  max-w-72">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>

          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div>
          <p>S:</p>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => {
              return (
                <a
                  key={index}
                  href={item}
                  className="text-gray-800  hover:animate-pulse flex flex-col underline"
                >
                  {item}
                </a>
              );
            }
          )}
        </div>
      </div>

      <div className="border-b-2 border-gray-800 "></div>

      <div className=" pt-12 px-16 flex  justify-between  ">
        <div>
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="px-10 flex mt-10 uppercase gap-10 items-center justify-center  py-6  bg-zinc-900 rounded-full text-white ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>

        <div className="w-1/2 h-[60vh]   ">
                <img className="rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
