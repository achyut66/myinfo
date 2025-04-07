import React from 'react'

function skillinfo({title, skills}) {
 
  return (
    <div className=''>
        <h3 className='text-2xl px-9 py-5 font-bold transition-all'>{title}</h3>
        <hr className='w-full border border-[#74a1fcb3]'/>
        <div className='px-9 py-5'>
            {skills.map((item , index)=>{
                   return <React.Fragment key={index}>
                   <div key={`index_${index}`} className='flex justify-between'>
                       <p>{item.skill}</p>
                       <p>{item.persentage}</p>
                   </div>
                   <input type="range" min={"0"} max={"100"} readOnly={true} value={item.persentage[0]+item.persentage[1]}  className='transition-all w-full text-blue-950' />
                   </React.Fragment> 
            })}
        </div>
    </div>
  )
}

export default skillinfo