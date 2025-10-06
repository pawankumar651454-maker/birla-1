import React from "react";

const RoomPricingComponent = () => {
  return (
    <div className="flex flex-col gap-4 bg-white py-10 px-4 text-lg sm:text-xl">
      <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        We Have Deluxe Rooms AC & Non-AC Available Family Rooms
        <br />
        Family Classic Rooms AC & Non-AC Both Type Of Rooms Available
      </h1>

      <div className="space-y-2  text-center">
        <p className="text-gray-700">2Bed Deluxe A.C. Rs. 2250/-</p>
        <p className="text-gray-700">2Bed A.C. Suite Rs. 4000/-</p>
        <p className="text-gray-700">2Bed Premier Room Rs. 3000/-</p>
        <p className="text-gray-700">2Bed Super Deluxe Rs. 3500/-</p>
      </div>

      <div className="space-y-2 ">
        <ul className="list-decimal list-inside space-y-1">
          <li className="text-orange-600 font-bold">
            Check out time: 10:00 AM, Check in Time: 11:00 AM
          </li>
          <li className="text-green-600">Running hot water (Solar System).</li>
          <li className="text-blue-600">
            Restaurant closing time 11:00 PM (Night)
          </li>
          <li className="text-green-700">
            Credit / Debit Card / UPI payment mode available
          </li>
        </ul>
      </div>

      <div className="col-span-2 space-y-4 text-center">
        <h2 className="text-gray-700 font-semibold">AC Rooms</h2>
        <ul className="space-y-1">
          <li>2 Beds AC Room – Rs. 1450/-</li>
          <li>3 Beds AC Room – Rs. 2350/-</li>
          <li>4 Beds AC Room – Rs. 2750/-</li>
          <li>5 Beds AC Room – Rs. 3750/-</li>
          <li>6 Beds AC Room – Rs. 4750/-</li>
        </ul>
      </div>
      <div className="col-span-2 space-y-4 text-center">
        <h2 className="text-gray-700 font-semibold">Non AC Rooms</h2>
        <ul className="space-y-1">
          <li>2 Beds AC Room – Rs. 1050/-</li>
          <li>3 Beds AC Room – Rs. 1750/-</li>
          <li>4 Beds AC Room – Rs. 2250/-</li>
          <li>5 Beds AC Room – Rs. 3250/-</li>
          <li>6 Beds AC Room – Rs. 4250/-</li>
        </ul>
      </div>
    </div>
  );
};

export default RoomPricingComponent;
