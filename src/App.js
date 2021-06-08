import React from 'react'
import './App.css';
import Feed from './pages/Feed';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import axios from 'axios';
import {connect} from 'react-redux'
import { setUser } from './redux/actions/_appAction';

function App(props) {

  React.useEffect(()=>{
    const getAvatar = async ()=>{
        try{
                const r = await axios.get(`https://uifaces.co/api`,{headers:{'x-api-key':"B59CB176-D47D4418-9B4BBBF3-AF1010A5"}});
                return r.data;
        }
        catch(e){
            if(e.response && e.response.data){
                return e.response.data;
            }
        }
    }

  getAvatar().then((data) =>{
      console.log(data);
      const user = data[Math.floor(Math.random()*(0,data.length-1))];
      
      props.setUser(user);
    })
},
// eslint-disable-next-line
[])

  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
  <Landing/>
    
    </Route>

    <Route exact path="/feed">
  <Feed/>
    
    </Route>    
    <Route  path="/login">
    <h1>Login Page</h1>
    </Route>


    <Route path="/:uid" render={(props) => {
   const uid = props.match.params.uid;
    return <Profile uid={uid} />
}}  />
    
  </Switch>
</div>
</Router>
  );
}

const mapDispatchToProps = (dispatch)=>({
  setUser:(user)=>(dispatch(setUser(user)))
})
export default connect(null,mapDispatchToProps)(App);
