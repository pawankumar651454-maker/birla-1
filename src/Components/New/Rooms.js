// import React from "react";
// import ACRoom from "./ACRoom";
// import NonACRoom from "./NonACRoom";

// const Rooms = () => {
//   return (
//     <div>
//       <ACRoom />
//       <NonACRoom />
//       {/* Comfortable Rooms  */}
//       <div>
//         <div className="flex flex-col justify-center items-center gap-4 p-2 text-center pb-6">
//           <h1 className="text-3xl md:text-4xl font-semibold ">
//             Comfortable Rooms
//           </h1>
//           <p>Affordable AC and non-AC rooms near Ram Mandir, free WiFi.</p>
//         </div>
//         <div className="h-[60vh] sm:h-[90vh] px-0 sm:px-6 md:px-20 mb-10">
//           <div className="h-1/2 flex justify-evenly py-2">
//             <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
//               <img
//                 src="/New/comfortableRoom1.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
//               <img
//                 src="/New/comfortableRoom2.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//           <div className="h-1/2 flex justify-evenly py-2">
//             <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
//               <img
//                 src="/New/comfortableRoom3.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
//               <img
//                 src="/New/comfortableRoom4.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rooms;

import React, { useEffect, useRef } from "react";
import ACRoom from "./ACRoom";
import NonACRoom from "./NonACRoom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate the entire section when it enters the viewport
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div >
      <ACRoom />
      <NonACRoom />
      {/* Comfortable Rooms Section */}
      <div ref={sectionRef}>
        <div className="flex flex-col justify-center items-center gap-4 p-2 text-center pb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Comfortable Rooms
          </h1>
          <p>Affordable AC and non-AC rooms near Ram Mandir, free WiFi.</p>
        </div>
        <div className="h-[60vh] sm:h-[90vh] px-0 sm:px-6 md:px-20 mb-10">
          <div className="h-1/2 flex justify-evenly py-2">
            <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img alt="a"
                src="/New/comfortableRoom1.avif"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img alt="a"
                src="/New/comfortableRoom2.avif"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="h-1/2 flex justify-evenly py-2">
            <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img alt="a"
                src="/New/comfortableRoom3.avif"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img alt="a"
                src="/New/comfortableRoom4.avif"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
