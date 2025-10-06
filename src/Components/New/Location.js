// import React from "react";

// const Location = () => {
//   return (
//     <div className="mt-8  md:min-h-[62vh] flex flex-col md:flex-row justify-evenly items-center">
//       <div className="w-full md:w-1/2 p-10 md:h-[70%] flex flex-col justify-evenly gap-4">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-semibold pb-4">
//             Location Details
//           </h1>
//           <p>
//             Birla Dharamshala Ayodhya is conveniently located near Ram Mandir,
//             offering affordable AC and non-AC rooms with free Wi-Fi and parking.
//           </p>
//         </div>
//         <div>
//           <p>
//             <strong>Address :</strong>24/2, 10 Ayodhya Rd. Sai Nagar, New
//             Colony, Ayodhya, Uttar Pradesh 224123
//           </p>
//           <p>
//             <strong>Phone No. :</strong>+919799589829
//           </p>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-6 mb-10">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82372.58550154182!2d82.15441324630828!3d26.791719441310143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07ecdf27cc41%3A0x7c9bd8b0b273a80f!2sBirla%20Dharamshala!5e0!3m2!1sen!2sus!4v1738317392182!5m2!1sen!2sus"
//           width="600"
//           height="450"
//           allowfullscreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//           className="w-full h-[200px] sm:h-[400px]"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Location;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Location = ({phone}) => {
  const textSectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Text Section Animation
    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Map Animation
    gsap.fromTo(
      mapRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="mt-8  md:min-h-[62vh] flex flex-col md:flex-row justify-evenly items-center">
      <div
        className="w-full md:w-1/2 p-10 md:h-[70%] flex flex-col justify-evenly gap-4"
        ref={textSectionRef}
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold pb-4">
            Location Details
          </h1>
          <p>
            Birla Dharamshala Ayodhya is conveniently located near Ram Mandir,
            offering affordable AC and non-AC rooms with free Wi-Fi and parking.
          </p>
        </div>
        <div>
          <p>
            <strong>Address :</strong>24/2, 10 Ayodhya Rd. Sai Nagar, New
            Colony, Ayodhya, Uttar Pradesh 224123
          </p>
          <p>
            <strong>Phone No. :</strong>{phone}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 mb-10">
        <iframe
          ref={mapRef}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82372.58550154182!2d82.15441324630828!3d26.791719441310143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07ecdf27cc41%3A0x7c9bd8b0b273a80f!2sBirla%20Dharamshala!5e0!3m2!1sen!2sus!4v1738317392182!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[200px] sm:h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
