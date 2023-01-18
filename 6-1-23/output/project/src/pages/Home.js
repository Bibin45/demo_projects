import React from 'react'
import Columnport from '../components/data'
import Header from '../components/Header'
import  {BasicReactTable}  from './Mytable'

class Home extends React.Component {
    constructor(){
      super()
      this.state={
          course:JSON.parse(localStorage.getItem('course_details')),
          columns:Columnport()
      }
    } 
      componentDidUpdate(){
        this.setState((state)=>state.columns=Columnport())
      }
      render() {
        console.log(this.state.course)
        console.log(this.state.columns)
      return (
        <div className='font'>
          <Header/>
          <h2 className='text-secondary mt-3 mb-0'>Our Course Are !</h2>
          <BasicReactTable data={this.state.course} columns={this.state.columns}/>
        </div>
      )
    }
}
export default Home