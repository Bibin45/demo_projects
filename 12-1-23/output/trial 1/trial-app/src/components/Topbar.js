import React from 'react'

export default function Topbar() {
    const topbar=[
        {   head:'With RM',
            image:'https://cdn-icons-png.flaticon.com/512/4388/4388296.png',
            num:10,
            time:'for 25 mins'
        },
        {   head:'Disbursal',
            image:'https://cdn-icons-png.flaticon.com/512/583/583985.png',
            num:37,
            time:'for 35 mins'
        },
        {   head:'With Customer',
            image:'https://cdn-icons-png.flaticon.com/512/8392/8392494.png',
            num:30,
            time:'for 45 mins'
        },
        {   head:'Capture Disbursal',
            image:'https://cdn-icons-png.flaticon.com/512/1251/1251219.png',
            num:20,
            time:'for 15 mins'
        },
    ]
  return (
    <div className='row border bg-dark border-primary p-0 m-2  bigbr text-light' >
            <div className='border-bottom  border-primary text-light  d-flex p-3 pt-2 pb-1' >
            <img src='https://cdn-icons-png.flaticon.com/512/1527/1527478.png' alt='icon' className='icon '/>
            <h4 > &nbsp;FAs Pending</h4>
            </div>
            {/* with RM */}
            {topbar.map((item,index)=>{
                return(
                    <div className='p-3 col ' key={index}>
                <div className=' p-3 bg_graddark'>
                    <h5 className='text-center p-2 '>{item.head}</h5>
                    <div className='col'>
                        <div className='d-flex justify-content-between'>
                            <img src={item.image} alt='icon' className='icon '/>
                          &nbsp;  <h3 className='p-2 pt-0 '> {item.num} </h3>
                            <h6 className='mt-3 min_color textsize'>{item.time} </h6>
                        </div> 
                    </div>
                </div>
            </div>
                )
            })}
       </div> 
  )
}
