import React from 'react'
import Header from '../components/Header'
import {Tab,Tabs,Form} from 'react-bootstrap';
import Chart from "react-apexcharts";
import Checkin from '../components/Checkin';
import Checkout from '../components/Checkout';

export default function View() {
  let linechart_options={chart : {id: "line-bar"},
                        xaxis: {categories: ["10Nov", "09 Nov", "08 Nov"]},
                        colors:['#F37B0C','#D3199F'],
                        plotOptions: { line: { distributed: true,}}
                      }
  let linechart_series= [
            {
              name: "Visits",
              data: [25, 40, 58]
            },
            {
              name: "Average Visits Per RM",
              data: [40, 65, 37 ]
            },
             
                  ] 
  let barchart_options={chart : {id: "barchart-bar"},
            xaxis: { 
              categories: ["Manual Approval", "Pre Approval", "Rejected","Cancelled"]},
              
              plotOptions: { bar: { distributed: true,},},
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
          }
        
  let barchart_series= [
      {
        name: "No. of FAs",
        data: [60, 50, 38,35]
      },
      
       
            ]    
  let disburse_options={chart : {id: "disburse-bar"},
  xaxis: { 
    categories: ["RM Approval", "Customer Confirmation", "Multiple Attempt","Manual Capture"]},
    
    plotOptions: { bar: { distributed: true,},},
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
}
        
let disburse_series= [
      {
        name: "No. of FAs",
        data: [60, 50, 38,35]
      },
      
       
            ]           
             
  let timechart_options={chart : {id: "time-bar"},
  xaxis: { 
    name:'Minutes',
    categories: ["Under 1", "1-2", "2-4","4-6","6-8","8-10","10+"]},
    
    plotOptions: { bar: { distributed: true,},},
     dataLabels: {
      enabled: false
    },
    
    legend: {
      show: false
    },

}
        
let timechart_series= [
      {
        name: "No. of FAs",
        data: [22, 20, 38,35,43,24,19]
      },
      
        
            ] 
  return (
    <div>
      <Header/>
      <div className='p-4 mt-3 font'>
        <div className='row text-light'>

          {/* penalty */}

            <div className='col border  border-primary p-0 m-2 black' >
              <div className='border  border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/4320/4320617.png' alt='icon' className='icon '/>
                <h4 >Penalty</h4>
              </div>
              
            <div className='p-3'>

              <div className='card p-3 bg_grad'>
                <h3 className='text-center p-2 '>Penalty Imposed</h3>
                <div className='row '>
                  <div className='col-9 d-flex'>
                    <h5>256K </h5>
                    <h5 className='p-2 pt-0'> UGX</h5>
                  </div>
                  <div className='col-3'>
                    <h5 className=' border   text-center br  num p-1'>70</h5>
                  </div>
                </div>
              </div>

              <div className='row p-1'>
                <div className='card p-1  bg_grad col m-2 mb-0'>
                  <h4 className='text-center '>Collected</h4>
                  <div className='d-flex '>
                      <h6>150K UGX </h6>
                      <h5 className='num ml-5 col textr'>45</h5>
                  </div>
                </div>

                <div className='card p-1  bg_grad col m-2 mb-0'>
                  <h4 className='text-center '>Waived</h4>
                  <div className='d-flex '>
                      <h6>106K UGX </h6>
                      <h5 className='num ml-5 col textr'>25</h5>
                  </div>
                </div>
             

              </div>
            </div>  
            </div>

            {/* disbursement */}
            <div className='col border  border-primary p-0 m-2 black' >
              <div className='border  border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/3886/3886981.png' alt='icon' className='icon '/>
                <h4 >Disbursement</h4>
              </div>
              
            <div className='p-3'>

              

              <div className='row p-3 mt-4'>
                <div className='card p-2  bg_grad col m-2 mb-0'>
                  <h6 className='text-center mt-3'>Returned Disbursement</h6>
                  
                      <h5 className='num text-center mt-3'>40</h5>
                  
                </div>

                <div className='card p-2  bg_grad col m-2 mb-0'>
                  <h6 className='text-center mt-3'>Duplicate Disbursement</h6>
                  
                      <h6 className='num text-center mb-3 mt-3'>60</h6>
                  
                </div>
             

              </div>
            </div>  
            </div>

          {/*Application mode  */}

          <div className='col border  border-primary p-0 m-2 black' >
              <div className='border  border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/3153/3153506.png' alt='icon' className='icon '/>
                <h4 >FA Application Mode</h4>
              </div>
              
            <div className='p-3'>

              

              <div className='row p-3'>
                <div className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2 '>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2 '>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>

              </div>
            </div>  
            </div>
        </div>

        <div className='row text-light'>

          {/* RM visit */}

            <div className='col border  border-primary p-0 m-2 black text-light ' >
              <div className='border   border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/753/753077.png' alt='icon' className='icon '/>
                <h4 >RM Visit</h4>
              </div>
              <Tabs
                  
                  
                  className="mb-3 p-2"
                  fill
              >
                <Tab eventKey="check-in" title="Check-in">
                      <Checkin/>
                </Tab>
                <Tab eventKey="check-out" title="Check-Out">
                  <Checkout/>
                </Tab>
                
                
              </Tabs>
  
            </div>

            {/* Visits chart */}
            <div className='col border  border-primary p-0 m-2 black' >
              <div className='border  border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/905/905806.png' alt='icon' className='icon '/>
                <h4 > Visits</h4>
              </div>
              <div className='text-dark'>
              <Chart
              
              options={linechart_options}
              series={linechart_series}
              type="line"
              
            />
              </div>
              
            </div>

          {/*Mobile users  */}

          <div className='col border  border-primary p-0 m-2 black' >
              <div className='border  border-primary text-light d-flex p-2' >
                <img src='https://cdn-icons-png.flaticon.com/512/2097/2097276.png' alt='icon' className='icon '/>
                <h4 >Mobile App Users</h4>
              </div>
              
            <div className='p-3'>

              

              <div className='row p-3'>
                <div className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2 '>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2'>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
                <div className='card  bg_grad col-5 mb-0 m-2 '>
                  <h6 className='text-center textsize mt-2'>By Repeat SMS</h6>
                  <div className='d-flex mt-2 mb-2'>
                    <h5 className='num'>15</h5>
                    <h5 className='greennum textr col'>10%</h5>
                  </div>
                </div>
            

              </div>
            </div>  
            </div>
      
      </div>

      {/* charts */}

      <div className='row'>
        <div className='col black m-2 p-0 border  border-primary  textr'>
              <div className='border border-primary  text-light d-flex p-2 col' >
                <img src='https://cdn-icons-png.flaticon.com/512/3273/3273589.png' alt='icon' className='icon '/>
                <h4 >FA Applications</h4>
                
              </div>
              <button className='btn textr text-light border  border-primary  rounded-0 m-2'>Total 200</button>
          
            <Chart
            options={barchart_options}
            series={barchart_series}
            type="bar"
            />
        </div>
        <div className='col black m-2 p-0 border    border-primary textr'>
              <div className='border  border-primary text-light d-flex p-2 col' >
                <img src='https://cdn-icons-png.flaticon.com/512/7969/7969375.png' alt='icon' className='icon '/>
                <h4 >Disbursement Delay Reasons</h4>
                
              </div>
              <button className='btn textr text-light border  border-primary rounded-0 m-2'>Above 60 sec</button>
            <Chart
            options={disburse_options}
            series={disburse_series}
            type="bar"
            />
        </div>
      </div>

      {/* check box charts  */}

      <div className='row'>
        <div className='col black m-2 p-0 border  border-primary text-center'>
              <div className='border  border-primary text-light d-flex p-2 col' >
                <img src='https://cdn-icons-png.flaticon.com/512/3073/3073440.png' alt='icon' className='icon '/>
                <h4 >Disbursement Time</h4>
                
              </div>
              <button className='btn textr text-light border border-primary rounded-0 m-2'>Application To Disbursement</button>
          
            <Chart
            options={timechart_options}
            series={timechart_series}
            type="bar"
            />
            <div className='row p-2 m-0 text-light '>
              <div className='col-4 border border-primary textsize  p-2 m-2 vsmall'>
                <div className='d-flex'>
                  <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With RM Manual Approval</label>
                </div>
                <div className='d-flex'>
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With RM Pre Approval</label>     
                </div>
              </div>
              <div className='col-3 border  border-primary textsize p-2 m-2 vsmall'>
                <div className='d-flex '>
                  <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Manual Capture</label>
                </div>
                <div className='d-flex'>
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Auto Capture</label>     
                </div>
              </div>
              <div className='col-3 border border-primary textsize p-2 m-2 vsmall '>
                <div className='d-flex '>
                  <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Multiple Attempt</label>
                </div>
                <div className='d-flex'>
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Single Attempt</label>     
                </div>
              </div>
              <div className='col-1 border border-primary br ht p-2 '>
                <h6>All</h6>    
              </div>
               
              <div className='col d-flex justify-content-center'>
              <div className='col-4 border border-primary textsize p-2 m-2 vsmall '>
                <div className='d-flex '>
                  <Form.Check.Input type={'checkbox'}isValid /><label> &nbsp; With OTP Confirmation</label>
                </div>
                <div className='d-flex'>
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;Without OTP Confirmation</label>     
                </div>
              </div>
              <div className='col-4 border  border-primary textsize p-2 m-2 vsmall '>
                <div className='d-flex '>
                  <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Auto Disbersal</label>
                </div>
                <div className='d-flex'>
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Manual Disbersal</label>     
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className='col black m-2 p-0 border  border-primary text-center'>
              <div className='border border-primary  text-light d-flex p-2 col' >
                <img src='https://cdn-icons-png.flaticon.com/512/7969/7969375.png' alt='icon' className='icon '/>
                <h4 >Disbursement Delay Reasons</h4>
                
              </div>
              <button className='btn  text-light border  border-primary rounded-0 m-2'>Repayment To Settlement</button>
            <Chart
           options={timechart_options}
           series={timechart_series}
            type="bar"
            />
           <div className='col  d-flex justify-content-center textsize p-2 m-2 text-light '>
                <div className='d-flex border border-primary p-3'>
                  <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Multiple Attempt</label>&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <Form.Check.Input type={'checkbox'}isValid /><label>&nbsp;With Single Attempt</label>     
                </div>
              </div> 
        </div>
        
      </div>
      
              
        </div>
    </div>
  )
}
