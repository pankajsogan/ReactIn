import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import NewPostModal from '../components/NewPostModal'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { setActivePage, setUser } from '../redux/actions/_appAction'
import Cookies from "js-cookie";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Feed(props) {
const location = useLocation();
    React.useEffect(() =>{
            props.setActivePage("home");
            const getUser = async ()=>{
                try{
                        const r = await axios.get(`http://localhost:5000/auth/user`,
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
    [location])
    return (
        <div className="feed__page">
           <Navbar/>
           {props.modal && <NewPostModal/>}
           <div className="feed__body">
               <Sidebar/>
               <Main/>
               <Widgets/>
           </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    modal:state.appReducer.modal
})

const mapDispatchToProps = (dispatch)=>({
    setUser:(user)=>(dispatch(setUser(user))),
    setActivePage:(activePage)=>(dispatch(setActivePage(activePage)))
})

export default connect(mapStateToProps,mapDispatchToProps)(Feed)
