import React from 'react'

export default function Mobile() {
    const arr=[
        {   head:'Installations',
            image:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            num:100,
            
        },
        {   head:'Active Installations',
            image:'https://cdn-icons-png.flaticon.com/512/2534/2534204.png',
            num:50,
            
        },
        {   head:'FAs Applied',
            image:'https://cdn-icons-png.flaticon.com/512/942/942748.png',
            num:35,
            
        },
        {   head:'FAs Repaid',
            image:'https://cdn-icons-png.flaticon.com/512/3110/3110494.png',
            num:30,
            
        },
    ]
  return (<>
    {arr.map((item,index)=>{return (<div key={index} className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>{item.head}</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>{item.num}</h5>
                    <h5 className='greennum textr col'><img src={item.image} alt='icon' className='icon '/></h5>
                  </div>
                </div>
                )})}
    </>
  )
}
