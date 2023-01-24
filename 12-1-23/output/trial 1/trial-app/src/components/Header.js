import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Header() {
     const provider=[
        {
            image:'https://s3-alpha-sig.figma.com/img/ff81/1761/7892f08757b8b107057101280b34e907?Expires=1674432000&Signature=V1ixuDIu6YjVG-Lt85UZcR5oD4uRte7d~KGjwud772FTt0iFNTUxj45TAw97Ojtxln7ZPFOmRd~Tyhs4VukRdzce7eNNlbGlk0Mek1Woghlem0ibwq3fK7jX8p9XnJYbkTph4RXp9QPmichpYLcXz4crezZG~8Mw6RDO3pEjdcFZp-h0xkGOZ1uWOC230O-DPCFD12tzXPnSuKkjklkZ43uUxYGBIUkHrSk06481zL67WJ7aUDZV9pqDZrMWV5CM9eI2F9YLlLH-OG~GQleIprmuAFvkI4syq~tDb6QLpPoaO-zbdvUEW0WtX4~N-0tDxI2i4fGCTlev7Fn3esUwTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/60b2/a8aa/1ad4c819600ac435662693dc95a6ba09?Expires=1674432000&Signature=n2yaj1oevKC5YkG3tdQ5Ps0wjds8VhcR-nudqO36Xlj9jdSFcOwPfU4D0SDa3vOMHB9ACgyu3XDZfTskWRt7gNlD8gtpNs-toFTT1h5evu678YXTYNcaEBy5MgXHZIvxvNBSSTJgzG3sBIhmgUZhV256J1OmEacXGF4yQYWkXwsBztYvLGap3pIMtn16pdIeCZJl-K-roAcE-EBtWvOL7v50IIYBE9sO6fRTrHK0c4hyDnZIDsnqhwEVoT2L~WWjJsg4eIazWPMRGaFmkCil75OaNe3oRM~tr~s1kSD5jQGk34NTR1E3u695hzsMYpo0L0zer3GAZm15uB4Ium-iew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/0dec/e44c/7ffbd1623c67fe953748e3d5c0b5c692?Expires=1674432000&Signature=Sp8TRIKctGCsFrmVwQVKyVrog1qnWAE7ki3UZK96EMECJRGjkKfBjmew~h5tIP7A0s0ct~DK-46tCCuipUhnsk55pED1vacWqfiyQk7mmrPfNhwQjcexxNA4zzye1NT0A1q09Ue8xPqvWOhMZcxxw~4G4wuoc8jexxMl-3fm2oN-vPOFgKbpBBATZTjY~849MzvypbW0AuTb5l05AMR2cTBK-E0RmrZs-dpXfvezkS9s2wtPbXNAZLBcIrKHmvNN41-4DkYyUoGagidKX-x6mjkNpZr~nvivqn7HnbuNFwD37~wWMD3rbZ81zj3PD-V37gvepkofh62wD2FwGjsc4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
    ]
    var k=[]
    const Drop=()=>{
      
    for(let i=1; i<=30;i++){
      k.push(i)
    }
    return k
  }
  Drop()
  const a=new Date()
  const[mydate,setMydate]=useState('Live | ' + new Date(a.setDate(a.getDate()) ).toLocaleTimeString())
  const [radioValue, setRadioValue] = useState('Live');
  console.log(typeof(mydate))

   const radios = [
    {  value: 'Live',label:new Date(a.setDate(a.getDate()) ).toLocaleTimeString()},
    {  value: 'Today',label:new Date(a.setDate(a.getDate()) ).toDateString() },
    {  value: 'Yesterday',label:new Date(a.setDate(a.getDate()-1) ).toDateString() },
    {  value: 'Day b/f y/day',label:new Date(a.setDate(a.getDate()-1) ).toDateString() },
    {  value: 'This Month',label:'From '+ new Date(a.setDate(a.getMonth()) ).toDateString() },
    {  value: 'Last Month',label:'From '+ new Date(a.setDate(a.getMonth()-10) ).toDateString() },
  ];
  
  return (
    <div className='font '>
        <nav color='inherit' position='static' className='navbar   row nav bg-expand black text-light m-0 p-0'>
      <div className=' mt-2 container col-8 ' style={{height:'60px'}}>
            <h3 className='p-3 pt-0'> Business Operations</h3>
        </div>
      <div className='col-4 '>
        <div className='d-flex justify-content-end m-2'>
        <button className='btn btn-light text-danger'><h6>Export To PDF</h6></button>
        </div>
        <div className='row m-2'>
            <h6 className='col-3 mt-2'>Market </h6>
            <select className="form-select font  col" >
                <option  value="uganda">Uganda</option>
                <option value="india">India</option>
            </select> 
          </div>
          <div className='row m-2'>
            <h6 className='col-3 mt-2'>Provider</h6>
           <div className='col'> 
            {provider.map((item,index)=>{return (<button className='btn-default btn' key={index}><img className='size'  src={item.image} alt='Provider'/> </button>)})}
            </div>
        </div>
      
      </div>
    </nav>

   {/* today,yesterday */}
   
    <div className='p-2'>
    <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-primary'}
            name="radio"
            
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={(e) => setMydate([radio.value ," | ", radio.label] )}
            className='m-2 border  border-primary  rounded text-light'
          >
            {radio.value}{console.log(radio.label)}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>

     {/* calendar */}

    <div className='black p-2 row m-0'>
      <div className='d-flex col-6 text-light border  border-primary  p-3 m-1'>
        <h6 className='mt-3 col-2 d-flex justify-content-end'>Start Date</h6>
        <img className='icon m-2 mt-1' src='https://cdn-icons-png.flaticon.com/512/9367/9367502.png' alt='start date'/>
        <div className='col-2 m-2'><input className=' form-control ' type={'date'}/></div>
  
        <h6 className='mt-3 col-2 d-flex justify-content-end'>End Date</h6>
        <img className='icon m-2 mt-1' src='https://cdn-icons-png.flaticon.com/512/9367/9367502.png' alt='end date' />
        <div className='col-2 m-2'><input className=' form-control '  type={'date'}/></div>
        <button className='btn btn-secondary m-2 col  '>View</button>
      </div>
      
        <div className='col text-light d-flex justify-content-end ' >
        <div className='  border  border-primary  d-flex   p-3 m-1'>
          <div className='row  '>
            <h6 className='mt-3 col m-2'>Last</h6>
            <select className="form-select col m-2" >
              {k.map((item,index)=>{return <option key={index} value="day">{item}</option> })
                }
            </select> 
            <select className="form-select col m-2" >
              <option  value="days">Days</option>
              <option value="months">Months</option>
            </select> 
            <button className='btn btn-secondary col m-2'>View</button>
          </div>
      </div>
    </div>
    </div>

    {/* show respective date bar */}
    <div className='bg-info p-3'>
      <h6>{mydate}</h6>
    </div>
</div>
  )
}







