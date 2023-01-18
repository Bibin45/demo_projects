import React from 'react'

export default function Checkout() {
  return (
    <div>
       <div className='row p-2'>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Regular Check-Out</h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>35</h5>
                      <h5 className='greennum textr col'>20%</h5>
                    </div>
                  </div>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Force Check-Out <span className='small'>(inside circle)</span></h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>25</h5>
                      <h5 className='greennum textr col'>30%</h5>
                    </div>
                  </div>
                  <div className='card  bg_grad col mb-0 m-2'>
                    <h6 className='text-center textsize mt-3'>Force Check-Out <span className='small'>(outside circle)</span> </h6>
                    <div className='d-flex mt-2 mb-3'>
                      <h5 className='num'>35</h5>
                      <h5 className='greennum textr col'>40%</h5>
                    </div>
                  </div>
                </div>
    </div>
  )
}
