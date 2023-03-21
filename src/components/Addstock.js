import React, { useContext, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Stockcontext from '../Context/Stockcontext';

const Addstock = () => {
    const medicinename=useRef();
    const price=useRef();
    const quantity=useRef();
    const description=useRef();
    const contx=useContext(Stockcontext)
   
   const submithandler=(e)=>{
    e.preventDefault()
    const item={
        medicinename:medicinename.current.value,
        price:+price.current.value,
        quantity:+quantity.current.value,
        description:description.current.value
    }
    contx.additem(item)
    medicinename.current.value=null
    price.current.value=null
    quantity.current.value=null
    description.current.value=null
   }
  return (
    <div > 
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>MedicineName</Form.Label>
        <Form.Control type="text" ref={medicinename} placeholder="Enter medicine" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="medicinename">
        <Form.Label>MedicineDescription</Form.Label>
        <Form.Control type="text" ref={description} placeholder="Enter description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" ref={price} min={0} placeholder="enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" ref={quantity} min={0} placeholder="enter quantity" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submithandler}>
        AddStock
      </Button>
        </Form>
        </Container>
    </div>
  )
}

export default Addstock