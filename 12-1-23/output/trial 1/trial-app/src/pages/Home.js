import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Header from '../components/Header'
import Middlebar from '../components/Middlebar'
import Progress from '../components/Progress'
import Topbar from '../components/Topbar'

export default function Home() {
  const[mykey,setMykey]=useState('Today')
  const provider=[
    {   label:'money',
        num:34567876543456,
        image:'https://s3-alpha-sig.figma.com/img/ff81/1761/7892f08757b8b107057101280b34e907?Expires=1674432000&Signature=V1ixuDIu6YjVG-Lt85UZcR5oD4uRte7d~KGjwud772FTt0iFNTUxj45TAw97Ojtxln7ZPFOmRd~Tyhs4VukRdzce7eNNlbGlk0Mek1Woghlem0ibwq3fK7jX8p9XnJYbkTph4RXp9QPmichpYLcXz4crezZG~8Mw6RDO3pEjdcFZp-h0xkGOZ1uWOC230O-DPCFD12tzXPnSuKkjklkZ43uUxYGBIUkHrSk06481zL67WJ7aUDZV9pqDZrMWV5CM9eI2F9YLlLH-OG~GQleIprmuAFvkI4syq~tDb6QLpPoaO-zbdvUEW0WtX4~N-0tDxI2i4fGCTlev7Fn3esUwTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },  
    {   label:'mtn',
        num:987654567898765,
        image:'https://s3-alpha-sig.figma.com/img/60b2/a8aa/1ad4c819600ac435662693dc95a6ba09?Expires=1674432000&Signature=n2yaj1oevKC5YkG3tdQ5Ps0wjds8VhcR-nudqO36Xlj9jdSFcOwPfU4D0SDa3vOMHB9ACgyu3XDZfTskWRt7gNlD8gtpNs-toFTT1h5evu678YXTYNcaEBy5MgXHZIvxvNBSSTJgzG3sBIhmgUZhV256J1OmEacXGF4yQYWkXwsBztYvLGap3pIMtn16pdIeCZJl-K-roAcE-EBtWvOL7v50IIYBE9sO6fRTrHK0c4hyDnZIDsnqhwEVoT2L~WWjJsg4eIazWPMRGaFmkCil75OaNe3oRM~tr~s1kSD5jQGk34NTR1E3u695hzsMYpo0L0zer3GAZm15uB4Ium-iew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {   label:'bank',
        num:56787654324567,
        image:'https://s3-alpha-sig.figma.com/img/0dec/e44c/7ffbd1623c67fe953748e3d5c0b5c692?Expires=1674432000&Signature=Sp8TRIKctGCsFrmVwQVKyVrog1qnWAE7ki3UZK96EMECJRGjkKfBjmew~h5tIP7A0s0ct~DK-46tCCuipUhnsk55pED1vacWqfiyQk7mmrPfNhwQjcexxNA4zzye1NT0A1q09Ue8xPqvWOhMZcxxw~4G4wuoc8jexxMl-3fm2oN-vPOFgKbpBBATZTjY~849MzvypbW0AuTb5l05AMR2cTBK-E0RmrZs-dpXfvezkS9s2wtPbXNAZLBcIrKHmvNN41-4DkYyUoGagidKX-x6mjkNpZr~nvivqn7HnbuNFwD37~wWMD3rbZ81zj3PD-V37gvepkofh62wD2FwGjsc4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }
]
   const bottomtab=[
    {
        head:'Ontime Metrics',
        num:'270/300',
        per:'90%'
    },
    {
        head:'Overdue Metrics',
        num:'350/500',
        per:'70%'
    }
   ]
   const Drop=()=>{
    return(<div className='d-flex m-0 p-0'>
            <p className='m-0 p-0'>Last</p>&nbsp;
            <select className="form-select font bg-primary p-0 m-0 drop  rounded-0 col category" >
                    {[1,2,3,4,5].map((item,index)=> {
                        return(
                            <option className='bg-light ' key={index} value={item}>{item}</option>
                        )
                    })}  
            </select>&nbsp;
            <p className='m-0 p-0'>Days</p>
        </div>
    )
   }
   const Bottommap=()=>{
    return(<>
        <div className='d-flex'>
            {bottomtab.map((item,index)=>{
                return(
                    <div className='card p-2  bg_grad col m-2 mb-0' key={index}>
                        <h6 className='text-center mt-3'>{item.head}</h6>
                        <h6 className=' text-center min_color mb-3 mt-3'>{item.num}</h6>
                        <h6 className=' text-center per mb-3 mt-3'>{item.per}</h6>
                    </div>
                )
            })}
        </div>
    </>)
   }
  return (
    <div>
      <Header/>
      <div className='font text-light '>

      <Topbar/>

       <div  className='p-0 m-0'>
        <Progress/>
       </div>

       <div className='row  p-0 m-2 bigbr text-light' >
            
            {/* Agreement Due */}
            <div className=' col bgdue m-2 p-3'>
                <p className='text-center  '>Agreement Due</p>
                <div className='col d-flex justify-content-around'>
                    <p className='col-9'>Expiring   &nbsp; <img src='https://cdn-icons-png.flaticon.com/512/1310/1310802.png' alt='icon' className='iconsm'/></p>
                    <p className=' col'>30</p>
                </div>
                <div className='col d-flex justify-content-around'>
                    <p className='col-9'>Expired</p>
                    <p className=' col'>20</p>
                </div>
            </div>


        {/* Fas upgrade request */}
        <div className='col bgdue m-2 p-3 '>
            <p className='text-center  '>FA Upgrade Request</p>
            <div className='col d-flex justify-content-around'>
                <p>Pending</p>
                <p >30</p>
            </div>
        </div>

        {/* complaint */}
        <div className=' col bgdue m-2 p-3 '>
            <p className='text-center  '>Complaints</p>
            <div className='row'>
                <div className='col-10'>
                    <div className='col d-flex justify-content-around'>
                        <p className='col-9'>Need Resolution</p>
                        <p className='col' >30</p>
                    </div>
                    <div className='col-10 d-flex justify-content-around'>
                        <p className='col-11'>Total</p>
                        <p className='col'>30</p>
                    </div>
                </div>
                <div className='col-1 mt-3 '>
                    <img src='https://cdn-icons-png.flaticon.com/512/476/476809.png' alt='icon' className='icon'/>
                </div>
            </div>
        </div>



       </div>

        <Middlebar/>

        <div className='row  text-light p-2 w-100 ' >
            {/* repayment */}
            <div className='col border bg-dark border-primary p-0 m-2  bigbr'>
                <div className='border-bottom  border-primary text-light  d-flex p-3 pt-2 pb-1' >
                <img src='https://cdn-icons-png.flaticon.com/512/2381/2381965.png' alt='icon' className='icon '/>
                <h4 > &nbsp;Repayment</h4>
                </div>
                <div className='col  p-3 '>
                    <Tabs
                    onSelect={(k) => setMykey(k)}
                    activeKey={mykey}
                    fill
                    id="fill-tab-example"
                    className="mb-0 bgtext mb-4"
                    
                    >
                        <Tab eventKey='Today'  title='Today'>
                        <Bottommap/>
                        </Tab>
                        <Tab eventKey='Yesterday' title='Yesterday'>
                        <Bottommap/>
                        </Tab>
                        <Tab eventKey='Day b/f y/day' title='Day b/f y/day'>
                        <Bottommap/>
                        </Tab>
                        <Tab eventKey='Last 5 Days'className='text-light' title= {<Drop/>} >
                        <Bottommap/>
                        </Tab>
                    </Tabs>
     
                </div>
            </div>
            {/* float account balance */}
            <div className='col border bg-dark border-primary p-0 m-2  bigbr'>
                <div className='border-bottom  border-primary text-light  d-flex p-3 pt-2 pb-1' >
                <img src='https://cdn-icons-png.flaticon.com/512/2381/2381965.png' alt='icon' className='icon '/>
                <h4 > &nbsp;Float Account Balance</h4>
                </div>

                <div className='bgfloat m-3 row p-2 text-center'>
                    <div className='col-5  p-0 border border-primary border-end-0'>
                        <h6 className=' border-bottom border-primary p-2'>Network Provider</h6>
                        <div className='col bgdef'>
                            <Tabs
                                fill
                                id="fill-tab-example"
                                className="mb-0 vvsmall p-0 bg-default"
                                >
                               {provider.map((item,index)=>{
                                return(<Tab eventKey={item.label} key={index}  title={<img src={item.image} alt='icon' className='newicon ' />}>
                                    {provider.map((item,index)=>{
                                        return(
                                            <div className='p-2' key={index}>
                                                <img src={item.image} alt='icon' className='newicon '/>&nbsp;&nbsp;
                                                <label>{item.num}</label>
                                            </div>
                                        )
                                    })}
                                 </Tab>
                                )})}
                               
                                
                            
                            </Tabs>
                        </div>
                    </div>
                    <div className='col p-0  border border-primary border-end-0'>
                        <h6 className='border-bottom border-primary p-2'>Balance</h6>
                        <div className='text-center p-3'>
                            <p>1 million UGX</p>
                            <p>2 million UGX</p>
                        </div>
                        
                    </div>
                    <div className='col p-0  border border-primary'>
                        <h6 className='border-bottom border-primary p-2'>As on</h6>
                        <div className='text-center p-3'>
                            <p>5 mins ago</p>
                            <p>2 mins ago</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>


      </div>
    </div>
  )
}
