import { Link } from "react-router-dom";
import Login from "../pages/Login";
import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';

class Header extends Login{

    log=localStorage.getItem('islog')
    
    Logout(){
        localStorage.setItem('islog',false)
        console.log(this.state)
        window.location.assign('/')
    }

    render() {
        if(this.log==='false'){
            window.location.assign('/')
        }
        if(!localStorage.getItem('course_details')){
            localStorage.setItem('course_details',JSON.stringify([]))
          }
        
      return (
        <nav color='inherit' position='static' className='navbar d-block  nav bg-expand  ' style={{background:'#16171a' ,color:'goldenrod'}}>
          <div className='d-flex mt-2 container font' style={{height:'60px'}}>
            <Link to={'/create'}><button className="btn btn-warning text-light"  > Create Course </button></Link>
            <Link to={'/home'}><button className="btn btn-warning text-light" > Home </button></Link>
            <Link to={'/chart'}><button className="btn btn-warning text-light" > ChartView </button></Link>
            <button  className="btn btn-danger text-light"onClick={()=>this.Logout()} > Logout </button>
            <Join/>

          </div>
        </nav>
      )
    }
}
export default Header;

function Join() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Join Course
      </Button>
      <Modal show={show} className="font"onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title >Admissions Open</Modal.Title>
        </Modal.Header>
        <Form className="p-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
              />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email Address: </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Mobile Number: </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Your Number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address: </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}