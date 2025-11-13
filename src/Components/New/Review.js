// import React from "react";

// const Review = () => {
//   return (
//     <div className=" p-6 md:p-20">
//       <div className=" h-[80vh] md:h-[50vh] bg-[#a67c52] flex  md:flex-row flex-col">
//         <div className="w-full md:w-1/2 h-1/2 md:h-auto ">
//           <img
//             src="/New/reviewImg.avif"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="w-full md:w-1/2  h-1/2 md:h-auto text-white flex flex-col justify-evenly items-center text-center px-16 ">
//           <p className="text-4xl">★★★★★</p>
//           <p>
//             Affordable rooms with great amenities! Perfect location near Ram
//             Mandir. Highly recommend Birla Dharamshala Ayodhya.
//           </p>
//           <div className="flex flex-col justify-center items-center gap-2">
//             <div className="h-[50px] aspect-[1/1] bg-zinc-300 rounded-full"></div>
//             <span>Rajesh Kumar</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const reviewRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".review-image", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: reviewRef.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.from(".review-text", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: reviewRef.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.from(".review-rating", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: reviewRef.current,
          start: "top 90%",
        },
      });
    }, reviewRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={reviewRef} className="p-6 md:p-20">
      <div className="h-[80vh] md:h-[50vh] bg-[#a67c52] flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 h-1/2 md:h-auto review-image">
          <img alt="a"
            src="/New/reviewImg.avif"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto text-white flex flex-col justify-evenly items-center text-center px-16 review-text">
          <p className="text-4xl review-rating">★★★★★</p>
          <p>
            Affordable rooms with great amenities! Perfect location near Ram
            Mandir. Highly recommend Birla Dharamshala Ayodhya.
          </p>
          <div className="flex flex-col justify-center items-center gap-2 review-rating">
            <div className="h-[50px] aspect-[1/1] bg-zinc-300 rounded-full"></div>
            <span>Rajesh Kumar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

