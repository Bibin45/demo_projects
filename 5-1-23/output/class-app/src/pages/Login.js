import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            islog:false
        } 
    }
    check=()=>{
        console.log(this.state.email)
        if(this.state.email==='bibin@gmail.com'&&this.state.password==='111'){
            alert('Success')
            this.setState({islog:true})
        }
        else{
            alert('Failed')
        }
    }
    render() {
      return (<>
        {(!this.state.islog)?
        (<div className='container w-50'>
          <input className='form-control m-2' type='email'onChange={(e)=>this.setState({email:e.target.value})} placeholder='Enter Email'/>
          <input className='form-control m-2' type='password' onChange={(e)=>this.setState({password:e.target.value})}placeholder='Enter Password'/>
          <button className='btn btn-primary btn-lg' onClick={()=>this.check()}>Login</button>
        </div>)
        :
        (<button className='btn btn-warning btn-lg' onClick={()=>this.setState({islog:false})}>Logout</button>)
        }
    </>)
    }
}

export default Login

