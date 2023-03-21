import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Stockcontext from '../Context/Stockcontext'

const Bill = () => {
    const cntx=useContext(Stockcontext);
    const selectedmedicinename=useRef();
    const requiredquantity=useRef();
    const option=cntx.stockitems.map((item)=>(<option>{item.medicinename}</option>));
    const[billitem,setBillitem]=useState({})
    const[amount,setAmount]=useState(billitem.price);
    // useEffect(()=>{
    //     const intialitem=cntx.stockitems.filter((item)=>item.medicinename===selectedmedicinename.current.value);
    //     setBillitem(intialitem)
    // },[])
    const changehandler=()=>{
        let amount=billitem.price*requiredquantity.current.value
        setAmount(amount)
    }
    const clickhandler=()=>{
        let item={
            ...billitem,quantity:billitem.quantity-requiredquantity.current.value
        }
        console.log(item)
        cntx.billitem(item)
      
    }
    const selecthandler=()=>{
        const selecteditem=cntx.stockitems.filter((item)=>item.medicinename===selectedmedicinename.current.value);
       
        setBillitem(selecteditem[0])
        console.log(billitem)
    }
  return (
    <Container>
        <Form>
            <Row >
                <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>MedicineName</Form.Label>
        <Form.Select size="lg" ref={selectedmedicinename} onChange={selecthandler}>
        {option}
      </Form.Select>
      </Form.Group>
                </Col>
                <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>Medicinedescription</Form.Label>
        <Form.Control type="text" readOnly placeholder="Enter medicine" value={billitem.description} />
      </Form.Group>
                </Col>
                <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>Medicineprice</Form.Label>
        <Form.Control type="text" value={billitem.price} readOnly placeholder="Enter medicine" />
      </Form.Group>
                </Col>
                <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>MedicineStock</Form.Label>
        <Form.Control type="text" value={billitem.quantity}readOnly  placeholder="Enter medicine" />
      </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>Requrired quantity</Form.Label>
        <Form.Control type="text" ref={requiredquantity} onChange={changehandler} placeholder="Enter medicine" />
      </Form.Group>
    
                </Col>
                <Col>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>Total amount</Form.Label>
        <Form.Control type="text" value={amount} placeholder="Enter medicine" />
      </Form.Group>
    
                </Col> 
                </Row>
                <Col>
       <Button className='mb-3' onClick={clickhandler}>
        Bill the Product
       </Button>
    
                </Col>
        </Form>
    </Container>
  )
}

export default Bill