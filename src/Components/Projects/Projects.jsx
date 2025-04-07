import React ,{useRef} from 'react'
import {Projects} from "../../util/data"
import Projectcard from './Projectcard/projectcard'
import Slider from "react-slick";

const MyProjects = () => {
  const sliderRef = useRef()

  const settings = {
    dots: false,
    // infinite : true,
    speed : 500,
    slidesToShow : 2,
    slidesToScroll : 1,
    arrow: false,
    responsive : [
      {
        breakpoint : 769,
        settings :{
          slidesToShow: 1,
          SlidesToscroll:1,
        },
      },
    
    ]
  }

  return (
    <div id='Projects' className='max-w-screen-xl m-auto'>
      <h2 className="py-5 text-5xl font-bold text-[#0f9df8] text-center mt-10">
       Projects
      </h2>
      <div className='bg-gradient-to-br from-blue-950 to-slate-900 p-5 sm:p-10'>
         <Slider ref = {sliderRef} {...settings} className=''>
          {Projects.map((item)=>{
                return <Projectcard 
                     key = {item.title}
                     title = {item.title}
                     description ={item.description}
                     GithubLink ={item.GithubLink}
                     LiveServerLink = {item.LiveServerLink}
                />
          })}
         </Slider>
      </div>
    </div>
  )
}

export default MyProjects