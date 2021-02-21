import './App.css';
import { Col, Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useEffect, useState} from 'react'
import UserDetails from './pages/details';
import AllUsers from './pages/allUsers';
import Axios from 'axios';

const { Header, Content } = Layout;

function App() {
  
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

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>Users</Header>
          <Content>
            <Col>
              <Switch>
                <Route path={"/user/:id" }>
                  <UserDetails></UserDetails>     
                </Route>
                <Route path="/">
                  <AllUsers users={users} dUser={deleteUser}></AllUsers>
                </Route>
              </Switch>
            </Col>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
