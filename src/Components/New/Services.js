// import React from "react";
// import Review from "./Review";

// const Services = () => {
//   return (
//     <div>
//       <div className="h-[190vh] min-[445px]:h-[110vh] lg:h-[80vh] w-full bg-[#4a3f35] flex flex-col justify-evenly items-center ">
//         <h1 className="text-3xl md:text-4xl text-white font-semibold">Affordable Room Options</h1>
//         <p className="text-lg md:text-xl text-white text-center px-10 min-[445px]:px-20 py-2">
//           Birla Dharamshala offers AC and non-AC rooms at budget-friendly rates
//           for all guests.
//         </p>
//         <div className="h-[80%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
//           <div className=" h-full w-[80%] lg:w-[29%] aspect-[4/6] md:aspect-[4/5] rounded-b-3xl  lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//             <div className="w-full min-[445px]:w-1/2 lg:w-full  h-1/2  min-[445px]:h-full lg:h-[60%]">
//               <img
//                 src="/New/room1.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col  justify-center items-center gap-3 p-6 ">
//               <h4 className="text-xl font-semibold">Free Wi-Fi Access</h4>
//               <p>
//                 Enjoy complimentary Wi-Fi during your stay at Birla Dharamshala
//                 Ayodhya for seamless connectivity.
//               </p>
//             </div>
//           </div>
//           <div className="h-full  w-[80%] lg:w-[29%] aspect-[4/6] md:aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//             <div className="w-full min-[445px]:w-1/2 lg:w-full  h-1/2  min-[445px]:h-full lg:h-[60%]">
//               <img
//                 src="/New/room2.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6 ">
//               <h4 className="text-xl font-semibold">
//                 Convenient Parking Facility
//               </h4>
//               <p>
//                 We provide free parking services for our guests, ensuring a
//                 hassle-free experience
//               </p>
//             </div>
//           </div>
//           <div className="h-full  w-[80%] lg:w-[29%] aspect-[4/6] md:aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden">
//             <div className="w-full min-[445px]:w-1/2 lg:w-full h-1/2  min-[445px]:h-full lg:h-[60%]">
//               <img
//                 src="/New/room3.avif"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6 ">
//               <h4 className="text-xl font-semibold">
//                 Experience the proximity to Ram Mandir while enjoying your stay
//                 with us.
//               </h4>
//               <p>Located Near Ram Mandir</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Review />
//     </div>
//   );
// };

// export default Services;

import React, { useEffect, useRef } from "react";
import Review from "./Review";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      cardRefs.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="h-[190vh] min-[445px]:h-[110vh] lg:h-[80vh] w-screen bg-[#4a3f35] flex flex-col justify-evenly items-center ">
        <h1 className="text-3xl md:text-4xl text-white font-semibold">Affordable Room Options</h1>
        <p className="text-lg md:text-xl text-white text-center px-10 min-[445px]:px-20 py-2">
          Birla Dharamshala offers AC and non-AC rooms at budget-friendly rates
          for all guests.
        </p>
        <div className="h-[80%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
          {/** Room Card Components */}
          {[
            {
              imgSrc: "/New/service1.avif",
              title: "Free Wi-Fi Access",
              description: "Enjoy complimentary Wi-Fi during your stay at Birla Dharamshala Ayodhya for seamless connectivity."
            },
            {
              imgSrc: "/New/service2.avif",
              title: "Convenient Parking Facility",
              description: "We provide free parking services for our guests, ensuring a hassle-free experience."
            },
            {
              imgSrc: "/New/service3.avif",
              title: "Located Near Ram Mandir",
              description: "Experience the proximity to Ram Mandir while enjoying your stay with us."
            }
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="h-full w-[80%] lg:w-[29%] aspect-[4/6] md:aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col min-[445px]:flex-row lg:flex-col bg-white overflow-hidden"
            >
              <div className="w-full min-[445px]:w-1/2 lg:w-full h-1/2 min-[445px]:h-full lg:h-[60%]">
                <img src={card.imgSrc} className="h-full w-full object-cover" />
              </div>
              <div className="h-full w-full min-[445px]:w-1/2 lg:w-full lg:h-[40%] flex flex-col justify-center items-center gap-3 p-6 ">
                <h4 className="text-xl font-semibold">{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Services;

