// import React from "react";

// const AffordableRoomPage = () => {
//   return (
//     <div className="h-[80vh] flex flex-col-reverse lg:flex-row justify-evenly items-center p-4">
//       <div className="w-full text-center lg:text-left lg:w-1/2 h-full flex justify-center items-center lg:items-start gap-6  flex-col pl-6">
//         <p className="pl-2 text-xl">Affordable AC and non-AC rooms near Ram Mandir with free Wi-Fi and parking.</p>
//         <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
//           <a href="http://wa.me/+919799589829" className=" h-full">
//             BOOK NOW
//           </a>
//         </button>
//       </div>
//       <div className="relative w-full sm:w-[80%] lg:w-1/2 h-full flex justify-center items-center">
//         <div className="h-[70%] w-full md:w-[70%] rounded-2xl overflow-hidden">
//           <img src="/New/room.avif" className="h-full w-full object-cover" />
//         </div>
//         <div className="absolute text-white flex gap-6 w-[80%] md:w-[65%] lg:w-1/2 p-6 lg:p-10 bg-[#a67c52] top-[78%] lg:top-[60%] lg:right-[60%]">
//           <div>
//             <h4 className="text-4xl font-semibold">150+</h4>
//             <span>Best Rates</span>
//           </div>
//           <div>
//             <h4 className="text-4xl font-semibold">15</h4>
//             <span className="">Trusted By Guests</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AffordableRoomPage;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AffordableRoomPage = ({phone}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate the entire component when it enters the viewport with scroll scrub
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Trigger animation when 80% of the element is visible
          scrub: 1, // Enable smooth scrub scrolling
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[80vh] flex flex-col-reverse lg:flex-row justify-evenly items-center p-4"
    >
      <div className="w-full text-center lg:text-left lg:w-1/2 h-full flex justify-center items-center lg:items-start gap-6 flex-col pl-6">
        <p className="pl-2 text-xl">
          Affordable AC and non-AC rooms near Ram Mandir with free Wi-Fi and
          parking.
        </p>
        <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
          <a href={`http://wa.me/${phone}`} className="h-full">
            BOOK NOW
          </a>
        </button>
      </div>

      <div className="relative w-full sm:w-[80%] lg:w-1/2 h-full flex justify-center items-center">
        <div className="h-[70%] w-full md:w-[70%] rounded-2xl overflow-hidden">
          <img src="/New/room.avif" className="h-full w-full object-cover" />
        </div>
        <div className="absolute text-white flex gap-6 w-[80%] md:w-[65%] lg:w-1/2 p-6 lg:p-10 bg-[#a67c52] top-[78%] lg:top-[60%] lg:right-[60%]">
          <div>
            <h4 className="text-4xl font-semibold">150+</h4>
            <span>Best Rates</span>
          </div>
          <div>
            <h4 className="text-4xl font-semibold">15</h4>
            <span className="">Trusted By Guests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableRoomPage;
