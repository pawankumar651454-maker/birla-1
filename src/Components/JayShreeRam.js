import React from "react";

const JayShreeRam = () => {
  return (
    <div className=" w-full aspect-[16/11] p-4">
      <div className=" sm:h-[90%] ">
        <div className="h-[8%] bg-orange-600 text-white flex justify-center items-center ">
          Jay Shree Ram
        </div>
        <div className="h-[92%] flex flex-col sm:flex-row justify-between">
          <div className=" h-[50%] sm:h-full w-full sm:w-[48%]">
            <img src="mandir1.webp" className="h-full w-full object-cover" />
          </div>
          <div className="h-[50%] sm:h-full w-full sm:w-[48%]">
            <img src="mandir2.webp" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <p className=" text-lg md:text-xl pt-[60px] pb-[20px] sm:pt-10 text-orange-500 h-[10%] flex items-center">
        Dharamshalas are an excellent choice for pilgrims looking for affordable
        accommodation in Ayodhya close to major temples.
      </p>
    </div>
  );
};

export default JayShreeRam;
