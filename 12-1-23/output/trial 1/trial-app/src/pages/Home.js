import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='font'>
      <div className='row border  border-primary p-0 m-2 bg-dark bigbr text-light' >
            <div className='border-bottom  border-primary text-light  d-flex p-3 pt-2 pb-1' >
            <img src='https://cdn-icons-png.flaticon.com/512/1527/1527478.png' alt='icon' className='icon '/>
            <h4 > &nbsp;FAs Pending</h4>
            </div>
            {/* with RM */}
            <div className='p-3 col'>
                <div className=' p-3 bg_graddark'>
                    <h5 className='text-center p-2 '>With RM</h5>
                    <div className='col'>
                        <div className='d-flex justify-content-between'>
                            <img src='https://cdn-icons-png.flaticon.com/512/4388/4388296.png' alt='icon' className='icon '/>
                          &nbsp;  <h3 className='p-2 pt-0 '> 10</h3>
                            <h6 className='mt-3 min_color textsize'>for 25 mins</h6>
                        </div> 
                    </div>
                </div>
            </div>


        {/* disbursal */}
        <div className='p-3 col'>
                <div className=' p-3 bg_graddark'>
                    <h5 className='text-center p-2 '>Disbursal</h5>
                    <div className='col'>
                        <div className='d-flex justify-content-around'>
                            <img src='https://cdn-icons-png.flaticon.com/512/583/583985.png' alt='icon' className='icon '/>
                            &nbsp;  <h3 className='p-2 pt-0 '> 10</h3>
                            <h6 className='mt-3 min_color textsize'>for 25 mins</h6>
                        </div> 
                    </div>
                </div>
            </div>

        {/* with Customer */}


        <div className='p-3 col'>
                <div className=' p-3 bg_graddark'>
                    <h5 className='text-center p-2 '>With Customer</h5>
                    <div className='col'>
                        <div className='d-flex justify-content-around'>
                            <img src='https://cdn-icons-png.flaticon.com/512/8392/8392494.png' alt='icon' className='icon '/>
                            &nbsp;  <h3 className='p-2 pt-0 '> 10</h3>
                            <h6 className='mt-3 min_color textsize'>for 25 mins</h6>
                        </div> 
                    </div>
                </div>
            </div>


        {/*Capture Disbursal  */}


        <div className='p-3 col'>
                <div className=' p-3 bg_graddark'>
                    <h5 className='text-center p-2 '>Capture Disbursal</h5>
                    <div className='col'>
                        <div className='d-flex justify-content-around'>
                            <img src='https://cdn-icons-png.flaticon.com/512/1251/1251219.png' alt='icon' className='icon '/>
                            &nbsp;  <h3 className='p-2 pt-0 '> 10</h3>
                            <h6 className='mt-3 min_color textsize'>for 25 mins</h6>
                        </div> 
                    </div>
                </div>
            </div>


       </div> 
      </div>
    </div>
  )
}
