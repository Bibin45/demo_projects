import React from 'react'
import {Link} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            
        } 
    }
    
        log=localStorage.getItem('islog')
        
    
    check (){
        let myuser=JSON.parse(localStorage.getItem('user_details'))
        var mylog=2
                    console.log(myuser)
                    for(let item=0; item<myuser.length; item++){
                        console.log(myuser[item].email)
                        console.log(this.state.email)
                        if(this.state.email===myuser[item].email && this.state.password===myuser[item].password){
                            localStorage.setItem('islog',true)
                            mylog=1
                            break
                        }
                        else{
                            mylog=0
                        }
            }
            if(mylog===1){
                alert('LoggedIn Successfully')
                window.location.assign('/home')
            }
            if(mylog===0){
                alert('Invalid Email or Password')
            }
            
        }
        
    
    render() {
        
        if(this.log===true){
            window.location.assign('/home')
        }
        
      return (
        
        <div className='container w-50 mt-5 text-secondary font'>
            <h2 className='mb-5'>Welcome !</h2>
            <input className='form-control m-2' type='email'onChange={(e)=>this.setState({email:e.target.value})} placeholder='Enter Email'required/>
            <input className='form-control m-2' type='password' onChange={(e)=>this.setState({password:e.target.value})}placeholder='Enter Password' required/>
            <button className='btn btn-primary btn-lg m-3 col-5'type='button' onClick={this.check.bind(this)}>Login</button>
            <Link to={'/register'}><button type='button' className='btn btn-warning btn-lg col-5 text-light'>New User ?</button></Link>
        </div>
        
    )
    }
}

export default Login

