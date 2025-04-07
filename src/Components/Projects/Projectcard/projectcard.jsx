import React from 'react'

const projectcard = (prop) => {
    console.log(prop)
  return (
    <div  data-aos="fade-down-right" className='bg-[#0a214e] border border-[#0a214e] mx-2 h-auto px-5 py-5 rounded-md text-center'>
        <h3 className='text-2xl font-bold my-2'>{prop.title}</h3>
        <p>{prop.description}</p>
        <div className='mt-7 md:m-7'><a href={prop.GithubLink} target='_blank' className='hover:bg-[#1f1f38] px-5 py-3 border border-solid mx-2 rounded-md'>Github</a> <a href={prop.LiveServerLink} target='_blank' className='hover:bg-[#1f1f38] px-5 py-3 border border-solid mx-2 rounded-md'>Live link</a></div>
    </div>
  )
}

export default projectcard