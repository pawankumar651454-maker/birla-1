// import React from "react";

// const AffordableRoomPage2 = () => {
//   return (
//     <div className="h-[130vh] min-[445px]:h-[110vh] lg:h-[80vh] w-full bg-[#4a3f35] flex flex-col justify-evenly items-center ">
//       <p className="text-xl text-white text-center px-10 min-[445px]:px-20">
//         Comfortable rooms near Ram Mandir with AC, non-AC, Wi-Fi, and parking
//         services.
//       </p>
//       <div className="h-[90%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
//         <div className=" w-[80%] lg:w-[29%] aspect-[4/5] rounded-b-3xl  lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//           <div className="w-full min-[445px]:w-1/2 lg:w-full  h-1/2  min-[445px]:h-full lg:h-[60%]">
//             <img src="/New/room1.avif" className="h-full w-full object-cover" />
//           </div>
//           <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col  justify-center items-center gap-3 p-6 ">
//             <h4 className="text-xl font-semibold">AC Room Options</h4>
//             <p>
//               Affordable AC rooms with all essential amenities for a relaxing
//               stay.
//             </p>
//           </div>
//         </div>
//         <div className="  w-[80%] lg:w-[29%] aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//           <div className="w-full min-[445px]:w-1/2 lg:w-full  h-1/2  min-[445px]:h-full lg:h-[60%]">
//             <img src="/New/room2.avif" className="h-full w-full object-cover" />
//           </div>
//           <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6 ">
//             <h4 className="text-xl font-semibold">Non-AC Room Options</h4>
//             <p>
//               Cozy non-AC rooms available at competitive rates for
//               budget-conscious travelers.
//             </p>
//           </div>
//         </div>
//         <div className="  w-[80%] lg:w-[29%] aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//           <div className="w-full min-[445px]:w-1/2 lg:w-full h-1/2  min-[445px]:h-full lg:h-[60%]">
//             <img src="/New/room3.avif" className="h-full w-full object-cover" />
//           </div>
//           <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6 ">
//             <h4 className="text-xl font-semibold">Free Wi-Fi Access</h4>
//             <p>
//               Enjoy complimentary Wi-Fi and parking services to enhance your
//               stay with us.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AffordableRoomPage2;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AffordableRoomPage2 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;

    // Animate the section title with scroll scrub
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animate the room cards with scroll scrub
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[130vh] min-[445px]:h-[110vh] lg:h-[80vh] w-full bg-[#4a3f35] flex flex-col justify-evenly items-center"
    >
      <p className="text-xl text-white text-center px-10 min-[445px]:px-20">
        Comfortable rooms near Ram Mandir with AC, non-AC, Wi-Fi, and parking
        services.
      </p>
      <div className="h-[90%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
        {[
          {
            img: "/New/room1.avif",
            title: "AC Room Options",
            desc: "Affordable AC rooms with all essential amenities for a relaxing stay.",
          },
          {
            img: "/New/room2.avif",
            title: "Non-AC Room Options",
            desc: "Cozy non-AC rooms available at competitive rates for budget-conscious travelers.",
          },
          {
            img: "/New/room3.avif",
            title: "Free Wi-Fi Access",
            desc: "Enjoy complimentary Wi-Fi and parking services to enhance your stay with us.",
          },
        ].map((room, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[80%] lg:w-[29%] aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden"
          >
            <div className="w-full min-[445px]:w-1/2 lg:w-full h-1/2 min-[445px]:h-full lg:h-[60%]">
              <img src={room.img} className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6">
              <h4 className="text-xl font-semibold">{room.title}</h4>
              <p>{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffordableRoomPage2;
