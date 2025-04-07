import React from "react";
import { ABOUT_ME_DATA } from "../util/data";
// import Aboutmephoto from "../assets/aboutpic.webp";

const Aboutme = () => {
  return (
    <section
      id="Aboutme"
      className="p-5 sm:p-10 bg-slate-950 max-w-screen-xl m-auto"
    >
      <h2 className="py-5 text-5xl font-bold text-[#0f9df8] text-center">
        About me
      </h2>
      <div className="flex justify-between flex-col md:flex-row my-7 gap-8">
        <div className="md:w-[30%]">
          {/* <img
            src={Aboutmephoto}
            alt=""
            className="aspect-square md:aspect-auto md:w-[100%] h-full object-cover rounded-md"
          /> */}
        </div>
        <div
          data-aos="fade-right"
          className="md:w-[67%] bg-gradient-to-br from-blue-950 to-slate-900 rounded-md"
        >
          <p className="text-justify p-6">
            {ABOUT_ME_DATA.introduction + ABOUT_ME_DATA.background}
          </p>
          <p className="text-justify p-6">
            {ABOUT_ME_DATA.interests + ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
