import './App.css';
import { Col, Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetails from './pages/details';
import AllUsers from './pages/allUsers';
const { Header, Content } = Layout;

function App() {
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
                  <AllUsers></AllUsers>
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
