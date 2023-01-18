import React from 'react'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            aadhar:'',
            address:'',
            phone:'',
            city:'',
            area:'',
            pin:'',
        }
        
    }
    
    Submit=()=>{        
        if(!localStorage.getItem('user_details')){
            localStorage.setItem('user_details',JSON.stringify([]))
          }
        let k=JSON.parse( localStorage.getItem('user_details'))
        let e=[...k,this.state]
        localStorage.setItem('user_details',JSON.stringify(e))
        alert('Registration Successfull')
        window.location.assign('/')
    }
    
    render() {
        
      return (
        <div>
            <form>
                <div className='container font mt-3  text-secondary'>
                    <h2>Registration Form : </h2>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Name : </label>
                        <input className='form-control col ' onChange={(e)=>this.setState({name:e.target.value})} placeholder="Enter Your Name" required/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Email : </label>
                        <input className='form-control col' type='email' onChange={(e)=>this.setState({email:e.target.value})} placeholder="Enter Your Email" required/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Password : </label>
                        <input className='form-control col' type='password' onChange={(e)=>this.setState({password:e.target.value})} placeholder="Enter Your Password" required/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Aadhar : </label>
                        <input className='form-control col'  onChange={(e)=>this.setState({aadhar:e.target.value})} placeholder="Enter Your Aadhar Number"/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Address : </label>
                        <input className='form-control col' onChange={(e)=>this.setState({address:e.target.value})} placeholder="Enter Your Address"/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Phone : </label>
                        <input className='form-control col'  onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Enter Your Phone Number"  required/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">City : </label>
                        <input className='form-control col' onChange={(e)=>this.setState({city:e.target.value})} placeholder="Enter Your City"  required/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Area : </label>
                        <input className='form-control col' onChange={(e)=>this.setState({area:e.target.value})} placeholder="Enter Your Area"/>
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="col-2">Postal Code : </label>
                        <input className='form-control col'  onChange={(e)=>this.setState({pin:e.target.value})} placeholder="Enter Your Pin Number" />
                    </div>
                    <button className='btn btn-success mt-3 col-12'type='button' onClick={this.Submit}>Submit</button>
                </div>
            </form>
        </div>
      )
    }
}

export default Register