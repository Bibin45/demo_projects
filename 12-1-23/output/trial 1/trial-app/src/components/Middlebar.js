import React from 'react'

export default function Middlebar() {
    const middlebar=[
        {   head:'Installations',
            image:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            num:100,
            per:'50%'
        },
        {   head:'Active Installations',
            image:'https://cdn-icons-png.flaticon.com/512/2534/2534204.png',
            num:50,
            per:'20%'
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
  return (
    <div className='row border bg-dark  border-primary p-0 m-2  bigbr text-light' >
    <div className='border-bottom  border-primary text-light  d-flex p-3 pt-2 pb-1' >
    <img src='https://cdn-icons-png.flaticon.com/512/3437/3437364.png' alt='icon' className='icon '/>
    <h4 > &nbsp;Mobile Users</h4>
    </div>
    {middlebar.map((item,index)=>{
        return(
        <div className='p-3 col' key={index}>
            <div className=' p-3 bg_graddark'>
                <h5 className='text-center p-2 '>{item.head}</h5>
                <div className='col'>
                    <div className='d-flex justify-content-between'>
                    <h5 className='mt-3 '>{item.num} <span className='textsize per'>{item.per?item.per:''} </span></h5> 
                    <img src={item.image} alt='icon' className='icon '/>
                    </div> 
                </div>
            </div>
        </div>
        )
    })}
</div>

  )
}
