import React from 'react'
import Header from './Header'
class Create extends React.Component{
  constructor(){
    super()
    this.state={
      course_name:'',
      duration:'',
      fees:''
    }
  }
  save(){
   
    let k=JSON.parse( localStorage.getItem('course_details'))
    let e=[...k,this.state]
    localStorage.setItem('course_details',JSON.stringify(e))
    this.setState({course_name:'',duration:'',fees:''})
    }
    render() {
      return (<>
        <Header/>
        
          <div className='container w-80 mt-5 font'>
          <input className='form-control m-2' type={'text'}  value={this.state.course_name} placeholder='Course Name' onChange={(e)=>this.setState({course_name:e.target.value})}/>
          <input className='form-control m-2' type={'text'}  value={this.state.duration}  placeholder='Course Duration'onChange={(e)=>this.setState({duration:e.target.value})}/>
          <input className='form-control m-2' type={'text'}  value={this.state.fees}  placeholder='Course Fees'onChange={(e)=>this.setState({fees:e.target.value})}/>
          <button className='btn btn-warning col-4 text-light' onClick={this.save.bind(this)}>Create Your Course</button>
        </div> 
        </>
      )
    }
}

export default Create
