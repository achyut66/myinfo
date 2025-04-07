import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { PROFILE_DATA } from "../util/data";

const Contect = () => {
  return (
    <div id="Contect" className="pb-5 max-w-screen-xl m-auto">
      <h2 className="py-5 text-5xl font-bold text-[#0f9df8] text-center mt-10">
        Contact
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:px-6 mx-5"
        data-aos="flip-up"
      >
        <div className="">
          <div className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800 ">
            {" "}
            <IoMdMail className="border border-solid h-auto w-auto text-[20px] rounded p-2 text-[#67e8f9] border-[#67e8f9]" />{" "}
            {PROFILE_DATA.email}
          </div>
          <div className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800">
            {" "}
            <IoPhonePortraitOutline className="border border-solid h-auto w-auto text-[20px] rounded p-2 text-[#67e8f9] border-[#67e8f9]" />{" "}
            {PROFILE_DATA.phone}
          </div>
          <div className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800">
            {" "}
            <MdOutlineWeb className="border border-solid h-auto w-auto text-[20px] rounded p-2 text-[#67e8f9] border-[#67e8f9]" />{" "}
            {PROFILE_DATA.website}
          </div>
        </div>
        <div>
          <form
            action="https://formsubmit.co/shubchoudhary1500@gmail.com"
            method={"POST"}
          >
            <div>
              {" "}
              <input
                type="text"
                className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800 w-full"
                placeholder="Name"
              />{" "}
            </div>
            <div>
              {" "}
              <input
                type="Email"
                className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800 w-full"
                placeholder="Email"
              />{" "}
            </div>
            <div>
              <textarea
                name=""
                id=""
                className="py-4 px-6 flex items-center gap-4 border mb-5 rounded bg-gradient-to-br from-blue-950 to-slate-900 border-blue-800 w-full"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value={"Submit"}
                className="py-2 px-6 flex items-center gap-4 border mb-5 rounded  w-full bg-blue-500 hover:bg-inherit cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contect;
