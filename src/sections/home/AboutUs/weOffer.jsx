import React from "react";

export default function WeOffer() {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="flex w-[900px] bg-themeCream rounded-3xl overflow-hidden shadow-md">
        <div className="grid items-center justify-center flex-1 p-5">
          <div className="p-5 text-themeGreen text-l text-center">
            What We Offer
          </div>
          <div className="text-center text-4xl text-black font-bold mb-2">
            Key Features
          </div>
          <div className="flex flex-row gap-5 text-lg text-gray-700">
            <div className="grid items-center gap-4 rounded-lg p-4">
              <img
                src="/ayushi.jpg"
                alt="Feature1"
                className="w-40 h-30 object-cover rounded-t-lg "
              />
              <p className=" text-center text-black font-serif">Feature 1</p>
            </div>
            <div className="grid items-center gap-4 rounded-lg p-4">
              <img
                src="/logo.png"
                alt="Feature2"
                className="w-full h-20 object-cover rounded-t-lg "
              />
              <p className=" text-center text-black font-serif">Feature 2</p>
            </div>
            <div className="grid items-center gap-4 rounded-lg px-4">
              <img
                src="/logo.png"
                alt="Feature3"
                className="w-full h-20 object-cover rounded-t-lg "
              />
              <p className=" text-center text-black font-serif">Feature 3</p>
            </div>
            <div className="grid items-center gap-4 rounded-lg p-4">
              <img
                src="/logo.png"
                alt="Feature4"
                className="w-full h-20 object-cover rounded-t-lg "
              />
              <p className=" text-center text-black font-serif">Feature 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="max-w-7xl mx-auto px-4 py-8">
//   <h1 className="text-3xl font-bold text-center text-themeBlack mb-6">
//     Our Vision
//   </h1>
//   <p className="text-lg text-center text-gray-700 mb-4">
//     We are here to help you find your everyday companions—whether you’ve
//     forgotten them somewhere or found someone else’s, we serve as the medium
//     to bring smiles back. Your near and dear belongings are now just a
//     website away.
//   </p>
//   <p className="text-lg text-center text-gray-700 mb-4">
//     Our vision is to bridge the gap between lost and found items by creating
//     a seamless platform that connects people with their belongings. We aim
//     to foster a community where individuals can easily report lost items and
//     claim those that have been found, ensuring no item goes unclaimed and no
//     person feels the loss of their possessions for long.
//   </p>
//   <p className="text-lg text-center text-gray-700">
//     By uniting community and technology, we strive to make the process of
//     recovering lost possessions simple, efficient, and stress-free—while
//     reminding everyone that kindness and humanity still thrive in today’s
//     digital world.
//   </p>
// </div>
