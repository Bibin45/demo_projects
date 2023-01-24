import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Progress() {
    const [value , setValue]=useState(0)
    const [favalue , setFavalue]=useState(0)
    const Myprogress=(a,b,c,d,e)=>{
        const k=(a/b)*100
        return (<>
        <div className=' col   '>
            <div className=' d-flex justify-content-end vsmall' >
                <h5 className='mt-3'>{a}</h5>
                { b&&!d?<>&nbsp;&nbsp;<h5 className='mt-3 per'>{k}%</h5></>:null}
                {e?(<><h5 className='mt-3'>K</h5><p className='mt-3'>UGX</p></>):null}
            </div>   
                <ProgressBar now={a} max={b?b:a} label={`${a}%`} variant={c} visuallyHidden />
        </div>  
            </>
        )
    }

  return (
    <div className='row m-0'>
        {/* active Customer */}
      <div className='col bgorange p-3 bigbr m-2 vsmall'>
        <h6 className='text-center'>Active Customers <img src='https://cdn-icons-png.flaticon.com/512/892/892662.png' className='iconsm' alt='icon'/> </h6>
        <p className='mt-5 mb-0 col-5'>Without FA</p>
        {Myprogress(60,300,'orange')}
        <p className='mt-5 mb-0 col-5'>Total</p>
        {Myprogress(300,false,'orange')}
      </div>
      {/* acqution Targets */}
      <div className='col bggreen p-3 bigbr m-2 vsmall '>
        <h6 className='text-center'>Acqutition Targets</h6>

        <div className='p-1 d-flex text-center  justify-content-center'>
        <div className='oldwid d-flex justify-content-center'>
            <div className='border  p-1'>
                <button onClick={()=>setValue(0)} className={`btn ${value===0?'btn-primary':'text-primary'} rounded-0   vvsmall btn-sm`} >This Month</button>
            </div>
            <div className='border  p-1'>
                <button onClick={()=>setValue(1)} className={`btn ${value===1?'btn-primary':'text-primary'} rounded-0   vvsmall btn-sm`}>Last Month</button>
            </div>
            </div>
        </div>
        
           {!value?
           (<div>
                <p className='mt-4 mb-0 col-5'>Acquired to date</p>
                {Myprogress(25,500,'green')}
                <p className='mt-4 mb-0 col-5'>November Target</p>
                {Myprogress(500,false,'green')}
            </div>)
        :
        (   <div >
                <p className='mt-4 mb-0 col-5'>Acquired to date</p>
                {Myprogress(100,400,'green')}
                <p className='mt-4 mb-0 col-6'>September Target</p>
                {Myprogress(400,false,'green')}
            </div>)
        } 
            
            
        
        
      </div>

    {/* Fas due */}
    <div className='col bgblue p-3 bigbr m-2 vsmall'>
        <h6 className='text-center'>FAs Due </h6>


        <div className='p-1 d-flex text-center  justify-content-center '>
            <div className='mywid d-flex justify-content-center'>
            <div className='border  p-1'>
                <button onClick={()=>setFavalue(0)} className={`btn ${favalue===0?'btn-primary':'text-primary'} rounded-0   vvsmall btn-sm`}>Today</button>
            </div>
            <div className='border  p-1'>
                <button onClick={()=>setFavalue(1)} className={`btn ${favalue===1?'btn-primary':'text-primary'} rounded-0   vvsmall btn-sm`}>Yesterday</button>
            </div>
            </div>
        </div>
        
           {!favalue?
           (<div>
            <p className='mt-4 mb-0 col-5'>Paid So Far</p>
        {Myprogress(250,400,'blue',true)}
        <p className='mt-4 mb-0 col-5 '>Today Due</p>
        {Myprogress(400,false,'blue')}
        </div>
            )
        :
        (<div >
            <p className='mt-4 mb-0 col-5'>Paid So Far</p>
        {Myprogress(300,400,'blue',true)}
        <p className='mt-4 mb-0 col-5 '>Yesterday Due</p>
        {Myprogress(400,false,'blue')}
        </div>
            )
        } 





        
      </div>


{/* Leads Pending */}
<div className='col bgpink p-3 bigbr m-2 vsmall cardheight'>
        <h6 className='text-center'>Leads Pending </h6>
        <p className='mt-2 mb-0 col-5'>With RMs</p>
        {Myprogress(40,50,'pink',true)}
        <p className='mt-2 mb-0 col-5 '>With R&C</p>
        {Myprogress(30,50,'pink',true)}
        <p className='mt-2 mb-0 col-5 '>Without Fas</p>
        {Myprogress(10,50,'pink',true)}
      </div>


{/* Penalty */}
<div className='col bgyellow p-3 bigbr m-2 vsmall cardheight'>
        <h6 className='text-center'>Penalty</h6>
        <p className='mt-2 mb-0 col-5'>Imposed</p>
        {Myprogress(256,false,'yellow',true,true )}
        <p className='mt-2 mb-0 col-5 '>Waived</p>
        {Myprogress(150,256,'yellow',true,true)}
        <p className='mt-2 mb-0 col-5 '>Collected</p>
        {Myprogress(106,256,'yellow',true,true)}
      </div>




    </div>
    
    
    
  )
}
