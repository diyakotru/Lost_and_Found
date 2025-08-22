import React from "react";

function Team() {
  return (
    <div className="my-20 flex items-center justify-center">
      {/* Team Section */}
      <div className="flex w-[900px] bg-themeCream rounded-3xl overflow-hidden shadow-md">
        {/* Left: Team Members */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Meet Our Team
          </h1>
          <p className="text-center text-xl font-bold text-themeGreen mb-5 mt-5">
            Frontend Developers
          </p>
          <div className="flex items-center justify-center gap-10">
            <div className="grid items-center gap-3">
              <img
                src="/harshita.jpg"
                alt="Harshita Bansal"
                className="w-40 h-40 rounded-full object-cover"
              />
              <span className="font-bold text-l mx-3">Harshita Bansal</span>
            </div>
            <div className="grid items-center gap-3">
              <img
                src="/ayushi.jpg"
                alt="Ayushi Thakur"
                className="w-40 h-40 rounded-full object-cover"
              />
              <span className="font-bold text-l mx-3">Ayushi Thakur</span>
            </div>
          </div>


          <p className="text-center text-xl font-bold text-themeGreen mb-5 mt-5">
            Backend Developers
          </p>
          <div className="flex items-center justify-center gap-10">
            <div className="grid items-center gap-3">
              <img
                src="/diya.jpg"
                alt="Diya Kotru"
                className="w-40 h-40 rounded-full object-cover"
              />
              <span className="font-bold text-l mx-3">Diya Kotru</span>
            </div>
            <div className="grid items-center gap-3">
              <img
                src="/devika.jpg"
                alt="Devika Dudhaniya"
                className="w-40 h-40 rounded-full object-cover"
              /> 
              <span className="font-bold text-l mx-3">Devika Dudhaniya</span>
            </div>
            <div className="grid items-center gap-3">
              <img
                src="/akshita.jpg"
                alt="AkshitaTanwar"
                className="w-40 h-40 rounded-full object-cover"
              />
              <span className="font-bold text-l mx-3">Akshita Tanwar</span>
            </div>
          </div>
          {/* Add team member details here */}
        </div>
      </div>
    </div>
  );
}

export default Team;
