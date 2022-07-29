import React, { Fragment, useState, useEffect } from "react";
import "../index.css";
import { EditUser } from "./editUser";
import Header from "./Header";
import Navigation from "./Navigation";
import { Button } from "react-bootstrap/Button";
import { Modal } from "react-bootstrap/Modal";
import { DeleteUser } from "./Delete";
// import  IconName  from "react-icons/fa";

export function UsersTable() {
  const [usersList, setUsersList] = useState([]);

  const getListUsers = async () => {
    const url = "http://localhost:3330/api/v1/Users";
    const option = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const data = await fetch(url, option);

    const jsonData = await data.json();

    setUsersList(jsonData);
  };
      

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <Fragment>
      <Header />
      <Navigation />
	  <div></div>

      {/* <div className="App"> */}
        <div
          className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg;"
		  style={{"padding" :"20px"}}
        >
          <table class="min-w-full  divide-y divide-gray-200 "  style={{ width: "100%",
		  
		  "text-align": "center" 
		}}>
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Full Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Telephone Number
                </th>
                <th
                  scope="col"
                  class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email Address
                </th>

                <th scope="col" class="relative px-6 py-1">
                  <span class="sr-only">Edit</span>
                </th>
                <th>Delete </th>
              </tr>
            </thead>

            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nom}</td>
                  <td>{user.adresse}</td>
                  <td>{user.telephone}</td>
                  <td>{user.mail}</td>

                  <td  style={{textAlign:"center"}}>
                    <EditUser user={user} />
                  </td>

                  <td style={{textAlign:"center"}}>
                  
                    <DeleteUser id={user.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </Fragment>
  );
}
