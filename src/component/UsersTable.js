import React ,{Fragment, useState,useEffect }from 'react';
import '../index.css'
import  {EditUser}  from './editUser';
import Header from "./Header"
import Navigation from "./Navigation"

export function UsersTable() {
	const [usersList,setUsersList ]= useState([]);

	const getListUsers= async()=>{
		const url = "http://localhost:3330/api/v1/Users";
		const option = {
		  method: "GET",
		  headers: { "Content-Type": "application/json" },
		
		};
		 const data= await fetch(url, option)

		
		const jsonData = await data.json();

		setUsersList(jsonData)
		
	}
	const deleteUser = async id => {
		try {
		  const deletedata = await fetch(`http://localhost:3330/api/v1/users/${id}`, {
			method: "DELETE"
		  });
	
		  setUsersList(usersList.filter(user => user.id !== id));
		} catch (err) {
		  console.error(err.message);
		}
	  };
	
	useEffect(() => {
		getListUsers();
	  }, [usersList]);



return (
	<Fragment>
	<Header/>
	<Navigation/>
	<div className="App">
	<table>
		<thead>
		<tr class="px-6 py-4 space-x-2 whitespace-nowrap text-right text-sm font-medium" >
		<th >ID</th>
		<th>FULL NAME </th>
		<th>EMAIL ADDRESS</th>
		<th>Edit</th>
		<th>Delete</th>
          </tr>
		  </thead>

			<tbody>
				{usersList.map(user =>(
					<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.nom}</td>
					<td>{user.mail}</td>
					<td>
                <EditUser user={user} />
              </td>

					<td>
                <button
                  className="btnn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
					</tr>
			))}
			</tbody>
		
		
	</table>
	</div>
	</Fragment>
);
}

