
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
function UserList(){

  const [userlist, setUserlist] = useState()
      async function getUserlist(){
        const user = await fetch("https://jsonplaceholder.typicode.com/users")
        const responseUser = await user.json()
        setUserlist(responseUser)
      }

      useEffect(() => {
        getUserlist()
      }, [])
      

    return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>E-mail</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {userlist && userlist.map((item,idx)=>{
        console.log(item)
        return(
          <tbody key={idx}>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      </tbody>
        )
      })}
    </Table>
    )
}

export default UserList;

