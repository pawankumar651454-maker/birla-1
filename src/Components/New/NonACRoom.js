// import React from "react";

// const NonACRoom = () => {
//   return (
//     <>
//       <div className="h-[170vh] lg:h-[90vh] flex flex-col px-6 md:px-20 my-10">
//         <div className="h-[65%] flex items-center flex-col lg:flex-row p-2">
//           <div className="h-full w-full md:w-[80%] lg:w-1/2 p-2">
//             <img
//               src="/New/NonACRoom1.avif"
//               className="h-full w-full object-cover rounded-xl"
//             />
//           </div>
//           <div className="h-full w-full md:w-[80%] lg:w-1/2 flex flex-col p-1">
//             <div className=" h-1/2 w-full flex">
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom2.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom3.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//             </div>
//             <div className=" h-1/2 w-full flex">
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom4.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom5.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="h-[35%] flex md:flex-row flex-col justify-evenly px-4">
//           <div className="w-full md:w-1/2 flex flex-col gap-2 justify-evenly ">
//             <h4 className="text-3xl font-semibold ">Non-AC Room</h4>
//             <p>
//               Experience budget-friendly non-AC rooms at Birla Dharamshala
//               Ayodhya. Located close to Ram Mandir, enjoy free WiFi and parking
//               for a hassle-free stay.
//             </p>
//             <p className="text-xl font-semibold">Affordable rates</p>
//             <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
//               <a href="http://wa.me/+919799589829" className=" h-full">
//                 RESERVE NOW
//               </a>
//             </button>
//           </div>
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <div className="w-[80%] h-full p-6 md:p-0 md:h-1/2 bg-[#fdedcf] flex  items-center">
//               <ul className="list-disc pl-10 text-xl">
//                 <li>Free WiFi, Parking</li>
//                 <li>Comfortable and Affordable</li>
//                 <li>Nearby Ram Mandir</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NonACRoom;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NonACRoom = ({phone}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".image", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      gsap.from(".content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="h-[170vh] lg:h-[90vh] flex flex-col px-6 md:px-20 my-10"
      >
        <div className="h-[65%] flex items-center flex-col lg:flex-row p-2">
          <div className="h-full w-full md:w-[80%] lg:w-1/2 p-2 image">
            <img
              src="/New/NonACRoom1.avif"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="h-full w-full md:w-[80%] lg:w-1/2 flex flex-col p-1">
            <div className="h-1/2 w-full flex">
              <div className="h-full w-1/2 p-1 image">
                <img
                  src="/New/NonACRoom2.avif"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="h-full w-1/2 p-1 image">
                <img
                  src="/New/NonACRoom3.avif"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="h-1/2 w-full flex">
              <div className="h-full w-1/2 p-1 image">
                <img
                  src="/New/NonACRoom4.avif"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="h-full w-1/2 p-1 image">
                <img
                  src="/New/NonACRoom5.avif"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[35%] flex md:flex-row flex-col justify-evenly px-4">
          <div className="w-full md:w-1/2 flex flex-col gap-2 justify-evenly content">
            <h4 className="text-3xl font-semibold ">Non-AC Room</h4>
            <p>
              Experience budget-friendly non-AC rooms at Birla Dharamshala
              Ayodhya. Located close to Ram Mandir, enjoy free WiFi and parking
              for a hassle-free stay.
            </p>
            <p className="text-xl font-semibold">Affordable rates</p>
            <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
              <a href={`http://wa.me/${phone}`} className="h-full">
                RESERVE NOW
              </a>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-[80%] h-full p-6 md:p-0 md:h-1/2 bg-[#fdedcf] flex items-center content">
              <ul className="list-disc pl-10 text-xl">
                <li>Free WiFi, Parking</li>
                <li>Comfortable and Affordable</li>
                <li>Nearby Ram Mandir</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonACRoom;
