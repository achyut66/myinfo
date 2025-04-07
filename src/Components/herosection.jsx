// import React, { useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaIdCardAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PROFILE_DATA } from "../util/data";
import profilepic from "../assets/aboutpic.jpeg";
import Resume from "../assets/MERN-intern-resume.pdf";

const herosection = () => {
  let { name, tagline, jobTitle, yearsOfExperience, location, email, skills } =
    PROFILE_DATA;
  return (
    <div
      id="Home"
      className=" max-w-screen-xl m-auto flex flex-col text-white p-6 md:p-[50px] justify-around items-center gap-5 lg:gap-0 md:flex-row bg-[#061840]"
    >
      <div data-aos="fade-down" className="sm:w-[70%] md:w-[60%] lg:w-[40%] ">
        <h4 className="text-xl my-2">Hi,i'm</h4>
        <h1 className="text-4xl">{name}</h1>
        <h4 className="text-2xl">{jobTitle}</h4>
        <p className="mt-2">{tagline}</p>
        <button className="bg-[#0f9df8] my-[10px] px-[15px] py-[8px] rounded-md border border-[#0f9df8] hover:bg-[#061840]">
          Contact me
        </button>{" "}
        <button
          onClick={() => {
            (window.location.href = Resume), Resume.download();
          }}
          className=" ml-3 my-[10px] px-[15px] py-[8px] rounded-md border border-[#0f9df8] hover:bg-[#0f9df8]"
        >
          Get Resume
        </button>
      </div>
      <div
        data-aos="fade-up"
        className="bg-gradient-to-br from-blue-950 to-slate-900 p-6 sm:w-[70%] md:w-[60%] lg:w-[40%] text-center rounded-md"
      >
        <div className="">
          <img
            src={profilepic}
            alt=""
            className="w-[139px] h-[139px] rounded-full bg-slate-400 m-auto"
          />
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md">
          <p>{name}</p>
          <p className="text-slate-500">{jobTitle}</p>
          <p className="text-slate-500">
            <MdLocationPin className="inline h-5 relative top-[-2px]" />{" "}
            {location}
          </p>
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md text-left overflow-auto ">
          <p className="flex items-center">
            <MdEmail className="inline mr-[6px]" />
            {email}
          </p>
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md text-left">
          <p>
            <FaIdCardAlt className="inline mr-[6px] relative top-[-2px]" />
            {yearsOfExperience}
          </p>
        </div>
        <div className="mt-3  flex flex-wrap gap-2 text-left">
          {skills.map((skill) => {
            return (
              <div
                className="bg-blue-800/30 px-3 py-1 rounded text-sm"
                key={skill}
              >
                {skill}
              </div>
            );
          })}
        </div>
        <div className="mt-3  flex flex-wrap gap-2 text-left ">
          <div className="bg-blue-800/30 px-3 py-3 rounded">
            <a href="https://github.com/itzshubu" target="_blank">
              <FaGithub className="text-lg md:text-xl" />
            </a>
          </div>
          <div className="bg-blue-800/30 px-3 py-3 rounded">
            <a href="" target="_blank">
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
          </div>
          <div className="bg-blue-800/30 px-3 py-3 rounded">
            <a href="" target="_blank">
              <FaXTwitter className="text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default herosection;
