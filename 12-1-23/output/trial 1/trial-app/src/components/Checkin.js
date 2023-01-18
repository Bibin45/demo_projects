import React from 'react'

export default function Checkin() {
  return (
    <div>
       <div className='row p-2'>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Regular Check-in</h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>35</h5>
                      <h5 className='greennum textr col'>10%</h5>
                    </div>
                  </div>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Force Check-in <span className='small'>(inside circle)</span></h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>15</h5>
                      <h5 className='greennum textr col'>10%</h5>
                    </div>
                  </div>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Force Check-in <span className='small'>(outside circle)</span> </h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>25</h5>
                      <h5 className='greennum textr col'>20%</h5>
                    </div>
                  </div>
                </div>
    </div>
  )
}
