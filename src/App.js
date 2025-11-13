import React, { useState } from "react";

import HomeImageComponent from "./Components/New/HomeImageComponent";
import JayShreeRam from "./Components/JayShreeRam";
import RoomPricingComponent from "./Components/RoomPricingComponent";
import GalleryComponent from "./Components/GalleryComponent";
import BirlaDharamshala from "./Components/BirlaDharamshala";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import AffordableRoomPage from "./Components/New/AffordableRoomPage";
import AffordableRoomPage2 from "./Components/New/AffordableRoomPage2";
import ACRoom from "./Components/New/ACRoom";
import NonACRoom from "./Components/New/NonACRoom";
import Review from "./Components/New/Review";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/New/AboutUs";
import Rooms from "./Components/New/Rooms";
import Services from "./Components/New/Services";
import Location from "./Components/New/Location";
import Layout from "./Layout";

const App = () => {
  const [phone, setPhone] = useState("+917568117419");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout phone={phone} />}>
          <Route
            index
            element={
              <div className="relative w-full overflow-hidden">
                {/* <Nav /> */}
                <HomeImageComponent phone={phone} />
                <AffordableRoomPage phone={phone} />
                <AffordableRoomPage2 />
                <ACRoom phone={phone} />
                <NonACRoom phone={phone} />
                <Review />
                {/* <Footer /> */}
                <div className="fixed flex h-[200px] items-center  justify-between p-10 w-full bottom-[20px] sm:bottom-0 left-0 ">
                  <a href={`tel:${phone}`} className="">
                    <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
                  </a>
                  <a href={`http://wa.me/${phone}`}>
                    <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
                  </a>
                </div>
              </div>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location phone={phone} />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
