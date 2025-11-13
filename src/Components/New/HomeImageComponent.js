import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HomeImageComponent = ({phone}) => {
  const imageRef = useRef(null);
  const titleRef = useRef([]);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image fade-in
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    // Title text stagger animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.8"
    );

    // Description fade-in
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Button animation
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.6"
    );

    // Box animations
    tl.fromTo(
      boxesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  return (
    <div className="w-full aspect-[16/40] min-[425px]:aspect-[16/32] sm:aspect-[16/20] md:aspect-[16/9] relative">
      <img alt="a"
        ref={imageRef}
        src="/New/home1.webp"
        className="w-full h-full object-cover"
      />
      <div className="absolute text-white h-full w-full top-0 left-0 p-4 sm:p-10 text-lg flex flex-col gap-4 items-center justify-evenly">
        <div className="text-5xl font-semibold md:text-6xl flex flex-col items-center justify-center text-center ">
          <h1 ref={(el) => (titleRef.current[0] = el)}>Affordable Stay in</h1>
          <h1 ref={(el) => (titleRef.current[1] = el)}>Ayodhya</h1>
        </div>

        <h1 ref={textRef} className="text-center">
          Experience comfort with AC and non-AC rooms near Ram Mandir.
        </h1>

        <button
          ref={buttonRef}
          className="bg-[#17fb18] px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-white rounded-full"
        >
          <a
            href={`http://wa.me/${phone}`}
            className="text-white h-full w-full"
          >
            BOOK NOW
          </a>
        </button>

        <div className="w-full flex sm:flex-row flex-col gap-2 justify-evenly items-center text-center">
          {["Prime Location", "Comfort Rooms", "Free Services"].map(
            (title, index) => (
              <div
                key={title}
                ref={(el) => (boxesRef.current[index] = el)}
                className="w-2/3 sm:w-[32%] h-[150px] flex flex-col gap-3 justify-center items-center bg-[#ffffff33] px-2"
              >
                <h2 className="font-semibold text-xl">{title}</h2>
                <p className="text-[16px]">
                  {index === 0
                    ? "Close to Ram Mandir with convenient access."
                    : index === 1
                    ? "Complimentary Wi-Fi and parking for guests."
                    : "Budget-friendly accommodations for all travelers."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeImageComponent;
