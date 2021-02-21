import { Col, Row, Table} from 'antd';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
const { Column, ColumnGroup } = Table;
const AllUsers = () =>{
  const [users,setUsers] = useState([])
  const [pageSize,setPageSize] = useState(5)
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
      <Row justify="space-between">
        <h1>List of All Users</h1>
        <input value={pageSize} type="number" id="page-size" onInput={(e)=>{if(e.target.value<51 && e.target.value>0){setPageSize(e.target.value)}}}></input>
      </Row>
      <Table dataSource={users} 
        rowKey={user=>user.id} 
        pagination={{pageSize:pageSize, showQuickJumper:true}} 
        showSorterTooltip={true}
      >
        {
          (users[0])?Object.keys(users[0]).map((column,index)=>(
          <Column title={column} dataIndex={column} key={index} 
            render={(text, user) => (
              (typeof(user[column])!=='object')?user[column]:flatten(user[column])
              
            )}
          />
          )):null
        }
        <ColumnGroup
          title="Actions"
          colSpan ={2}
          >
            <Column
              colSpan={0}
              key="actions"
              render={(text, user) => (
                <Link to={"/user/"+ user.id}>Open</Link>
              )}
            />
            <Column
              colSpan={0}
              render={(text, user) => (
                <button onClick={()=>deleteUser(user)}>Delete</button>
              )}>
            </Column>
          </ColumnGroup>
      </Table>
    </div>
  )
}

export default AllUsers