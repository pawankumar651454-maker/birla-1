// const Footer = () => {
//   return (
//     <footer className="bg-[#4E3C2C] text-white px-8 py-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Comfort</h2>
//           <p className="text-sm">
//             Affordable AC and non-AC rooms near Ram Mandir.
//           </p>

//           <p className="text-sm mt-8">&copy; 2024. All rights reserved.</p>
//         </div>

//         {/* Middle Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Stay</h3>
//           <p className="text-sm">+919799589829</p>
//           <p className="text-sm">info@birladharamshala.com</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({phone}) => {
  const footerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      // Animation for the left section
      gsap.from(".footer-left", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      // Animation for the middle section
      gsap.from(".footer-middle", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => context.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#4E3C2C] text-white px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="text-2xl font-bold mb-2">Comfort</h2>
          <p className="text-sm">
            Affordable AC and non-AC rooms near Ram Mandir.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3 className="text-lg font-semibold mb-2">Stay</h3>
          <p className="text-sm">{phone}</p>
          <p className="text-sm">info@birladharamshala.com</p>
        </div>

        {/* End Section */}
        <div className="footer-middle flex flex-col items-start justify-center md:items-center">
          <p className="text-sm">&copy; 2024. All rights reserved.</p>
          <p className="text-sm">powered by gowappilyinfotech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
