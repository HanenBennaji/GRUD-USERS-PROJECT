import React, { Fragment, useState } from "react";
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "./List.css";

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

      const response = await fetch(
        `http://localhost:3330/api/v1/Users?id=${user.id}`,
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

<Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

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
      {/* <button
        type="button"
        class="btne"
        data-toggle="modal"
        data-target={`#id${user.id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${user.id}`}
        onClick={() => setPassword(user.password)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit User</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {setPassword(user.password)
                console.log(user.password);}}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateUser(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setPassword(user.password)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
