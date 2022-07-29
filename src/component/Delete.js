import React, { Fragment, useState } from "react";
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { AiFillDelete } from "react-icons/ai";

import "../index.css";

export const DeleteUser  = (id) => {
    const [show, setShow] = useState(false);
    // const [usersList, setUsersList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(id);
  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(
        `http://localhost:3330/api/v1/users/${id.id}`,
        {
          method: "DELETE",
        }
      );
        console.log(deleteUser);
    //   setUsersList(usersLists.filter((user) => user.id !== id));
  
  handleClose()
    } catch (err) {
      console.error(err.message);
    }
}
    return (
        <Fragment>
    <div>
    <AiFillDelete onClick={handleShow} style={
      
        {"color": "red",
        "text-align": "center" 

    
    }
      }>
            DELETE
          </AiFillDelete>
          </div>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete user</Modal.Title>
            </Modal.Header>
            <Modal.Body><h2>Are you sure you want to delete</h2>
                </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={()=>deleteUser(id)}>
                Yes 
              </Button>
            </Modal.Footer>
          </Modal>
        
        </Fragment>
      );
    };
    


