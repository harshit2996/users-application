import Axios from 'axios'
import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
const AllUsers = () =>{
  const [users,setUsers] = useState([])
  function getUsers(){
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setUsers(res.data)
      })
    .catch(err=>{
      console.log(err)
    })
  }

  function deleteUser(user){
    let tempusers = users
    tempusers.splice(tempusers.indexOf(user),1)
    let data =[]
    tempusers.map(d=>(data.push(d)));
    setUsers(data)  
  }

  function flatten(obj) {
    let tempStr = ""
    for (const key in obj) {
      if(typeof obj[key] === 'object'){
        flatten (obj[key])
      }
      else{
        tempStr = tempStr + obj[key] + ' '
      }
    }
    return tempStr
  }

  useEffect(()=>{
    getUsers()
  },[])

  return(
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(users[0]||[]).map( column => (
              <th key={column}>{column}</th>
              ))
            }
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=>(
            <tr key={user.name}>
              {
                Object.entries(user).map((pair) => (
                  (typeof(pair[1])!=='object')?(
                    <td key={pair[0]}>
                      {pair[1]}
                  </td>
                  ):<td key={pair[0]}>{
                    flatten(pair[1])
                  }</td>
                ))
              }
              <td>
                <Link to={"/user/"+ user.id}>
                  Open
                </Link>
              </td>

              <td><button onClick={()=>deleteUser(user)}>Delete</button></td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers