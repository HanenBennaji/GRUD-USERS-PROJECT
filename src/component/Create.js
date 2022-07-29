import React, {  Fragment,useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../index.css'



function CreateUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   const handleSubmit = event => {
     event.preventDefault();
     var data = {
       "nom": fname,
       "prenom": lname,
       "telephone": telephone ,
       "adresse": adresse,
       "email": Email,
       "password": password , 
     }
 
     fetch('http://localhost:3330/api/v1/Users', {
       method: 'POST',
       headers: {
         Accept: 'application/form-data',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     })
     .then(res => res.json())
     .then(
       (result) => {
         alert(result['message'])
         if (result['status'] === 'ok') {
           window.location.href = '/';
         }
       }
     )
   }
    const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');
   const [telephone, setTelephone] = useState('');
   const [adresse, setAdresse] = useState('');
   const [Email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   return (
    <Fragment>
    <Button  onClick={handleShow} className="button-create--style  p-2 bd-highlight">
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Create  user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       {/* <form class="w-full max-w-lg mx-auto my-20" > */}
       <form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter First Name" onChange={(e) => setFname(e.target.value)}
/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email"
         placeholder="Enter Last Name" onChange={(e) => setLname(e.target.value)}
/>
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telephone </Form.Label>
        <Form.Control type="email"
         placeholder="Enter Telephone "onChange={(e) => setTelephone(e.target.value)}
    
/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse  </Form.Label>
        <Form.Control type="email"
         placeholder="Enter eAdress " onChange={(e) => setAdresse (e.target.value)}
  
/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email Address  </Form.Label>
        <Form.Control type="email"
         placeholder="Enter email " onChange={(e) => setEmail(e.target.value)}

  
/>
        
      </Form.Group>   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>                Password
 </Form.Label>
        <Form.Control type="email"
         placeholder="Enter password "  onChange={(e) => setPassword(e.target.value)}


  
/>
        
      </Form.Group>   
     

       {/* <button type="submit" onClick={handleSubmit} class="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           SUBMIT
       </button> */}
      
       </form>
       </Modal.Body>
       <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="button--style  p-2 bd-highlight">
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create 
          </Button>
        </Modal.Footer>
       </Modal>
    
    </Fragment>       
   )
}
 
export default CreateUser;