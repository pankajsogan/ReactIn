import React from 'react'
import './App.css';
import Feed from './pages/Feed';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import axios from 'axios';
import {connect} from 'react-redux'
import { setModal, setPost, setUser } from './redux/actions/_appAction';
import SignUp from './pages/SignUp';
import Cookies from "js-cookie";
import Onboarding from './pages/Onboarding';
import socketIOClient from "socket.io-client";

function App(props) {
  
  React.useEffect(()=>{
    const socket = socketIOClient('https://enigmatic-dusk-99502.herokuapp.com',{ transports: ["websocket"] });
    
    socket.on("newPost", data => {
      
      console.log(data);
      props.setPost(data.post && data.post);
      props.setModal(false);
    });
    const getUser = async ()=>{
        try{
                const r = await axios.get(`https://enigmatic-dusk-99502.herokuapp.com/auth/user`,
                {headers:{
                  "Authorization":"Bearer " +Cookies.get("AUTH_TOKEN"),
                  "Content-Type":"application/json"
              }});
                return r.data;
        }
        catch(e){
            if(e.response && e.response.data){
                return e.response.data;
            }
        }
    }

    Cookies.get("AUTH_TOKEN") && getUser().then((data) =>{
      console.log("Incoming user data",data);
      // const user = data[Math.floor(Math.random()*(0,data.length-1))];
      const {user} = data;
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
   
    <Route  exact path="/signup">
    <SignUp/>
    </Route>


    <Route exact path="/:uid" render={(props) => {
   const uid = props.match.params.uid;
    return <Profile uid={uid} />
}}  />

<Route exact path="/onboarding/start/:type/new/" render={(props) => {
   const type = props.match.params.type;
    return <Onboarding type={type} />
}}  />

    
  </Switch>
</div>
</Router>
  );
}

const mapStateToProps = (state)=>({
  isLogined: state.appReducer.isLogined
})

const mapDispatchToProps = (dispatch)=>({
  setUser:(user)=>(dispatch(setUser(user))),
  setPost:(post)=>(dispatch(setPost(post))),
  setModal:(modal)=>(dispatch(setModal(modal)))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
