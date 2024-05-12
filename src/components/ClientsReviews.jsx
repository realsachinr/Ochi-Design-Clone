import React from "react";

function ClientsReviews() {
  return (
    <div>
      <div className="w-full px-20 border-b-[1px] border-zinc-800  pb-10">
        <h1 className="text-7xl font-[Signika] tracking-tight ">
          Clients' Review
        </h1>
      </div>
      <div className="w-full px-20 mt-6 flex  gap-5">
        <div className="w-1/2 h-[75vh] justify-between py-5 px-7 flex flex-row  rounded-lg ">
          <p>Karman Ventures</p>

          <div className="flex flex-col gap-20">
            <p className="">Servicers: </p>
            <div className="flex gap-3 flex-col">
              <p className="border border-white px-3 py-1 rounded-full ">
                INVESTOR DECK
              </p>
              <div>
                <span className="border border-white px-3 py-1 rounded-full">
                  SALES DECK
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[75vh] justify-between py-5 px-7 flex flex-row  rounded-lg   ">
          <div>
            <p>William Barnes</p>
            <div className="mt-32">
              <img className="w-28 rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
            </div>
            <p className="max-w-[29rem] mt-4 leading-5">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
          <div>READ MORE</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between  px-20 border-zinc-800 py-4  border-t-[1px] border-b-[1px]"> 
            {["Planetly", "Nina Walloch", "READ"].map((item, index) => <p >{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Workiz Easy", "Tomer Levy", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Premium Blend", "Ellen Kim", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Hypercare Systems", "Brendan Goss", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Officevibe", "Raff Labrie", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Orderlion", "Stefan Strohmer", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Black Book", "Jaci Smith", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
        <div className="flex justify-between px-20 border-zinc-800 py-4   border-b-[1px]"> 
            {["Trawa Energy", "David Budde", "READ"].map((item, index) => <p>{item}</p>)}
        </div>
      </div>
    </div>
  );
}

export default ClientsReviews;
