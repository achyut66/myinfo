import React from 'react'

function skillcard(prop) {
  return (
        <>
        <h2 className='text-lg'>{prop.title}</h2>
        <prop.icon className="text-3xl sm:text-5xl absolute top-[-10%] left-[-10%] bg-blue-950 p-1 sm:p-2 border border-[#74a1fcb3] rounded-md" />
        </>
    
  )
}

export default skillcard