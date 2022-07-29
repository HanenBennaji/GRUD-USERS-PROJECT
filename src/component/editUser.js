import React, { Fragment, useState } from "react";
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { AiFillEdit } from "react-icons/ai";
import "../index.css";



export const EditUser = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [password, setPassword] = useState(user.password);
  const [mail, setMail] = useState(user.mail);
  const [username, setUserName] = useState(user.nom);
  

   const updateUser = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(`http://localhost:3330/api/v1/Users?id=${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email:mail,name:username}),
        }
      );
      
     handleClose()
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <Fragment>
<div>
<AiFillEdit  onClick={handleShow} style={
      
      {"color": "green"}
    }>
        Edit
      </AiFillEdit>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>Email</div><input
                type="text"
                className="form-control"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <div>Name</div>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateUser}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    
    </Fragment>
  );
};
