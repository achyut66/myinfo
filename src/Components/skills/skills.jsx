import React, { useState } from "react";
import { SKILLS } from "../../util/data";
import Skillcard from "./skillcard/skillcard";
import Skillinfo from "./skillInfo/skillinfo";

function skills() {
  const [data, setData] = useState(SKILLS[0]);
  const [active , setActive] = useState();
  return (
    <section className=" p-5 sm:p-10 max-w-screen-xl m-auto bg-gradient-to-br from-blue-950 to-slate-950" id="Skills">
        <h1 className="text-3xl mb-10 font-bold">Technical Skills</h1>
      <div className="grid grid-cols-1  md:grid-cols-2  gap-10">
        <div data-aos="fade-right" className="  grid grid-cols-2 h-[200px] sm:h-[306.67px]  gap-10">
          {SKILLS.map((item) => {
            return <div className={`flex flex-col justify-center items-center bg-slate-950  backdrop-blur-lg  relative sm:p-7 rounded-md border border-[#74a1fcb3] transition-all hover:bg-blue-950  cursor-pointer ${data.title == item.title?"active":""} `} key={item.title}
              onClick={()=>{setData(item);
              }}              
            >
                <Skillcard
                  title = {item.title}
                  icon = {item.icon}
                />
            </div>;
          })}
        </div>
        <div data-aos="fade-left" className="border border-[#74a1fcb3]   h-[306.67px] rounded-md bg-gradient-to-br from-slate-950 to-blue-950">
            <Skillinfo
             title = {data.title}
             skills = {data.skills}
            />
        </div>
      </div>
    </section>
  );
}

export default skills;
