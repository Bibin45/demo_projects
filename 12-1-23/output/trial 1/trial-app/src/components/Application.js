import React from 'react'

export default function Application() {
    const arr=[
        {   head:'By Repeat SMS',
            per:'13%',
            num:15,
            
        },
        {   head:'By Mobile App',
            per:"10%",
            num:50,
            
        },
        {   head:'By CS',
            per:'33%',
            num:35,
            
        },
        {   head:'By CS',
            per:'43%',
            num:30,
            
        },
    ]
  return (<>
    {arr.map((item,index)=>{
        return(
        <div key={index} className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>{item.head}</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>{item.num}</h5>
                    <h5 className='greennum textr col'>{item.per}</h5>
                  </div>
                </div>)})}
    </>
  )
}
