import React from 'react';
import "./FeedCardProfile.css";
import axios from "axios";
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/_appAction';

function FeedProfileCard(props) {
    
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
    },[])
    return (
        <div className="feedProfileCard">
            <div className="profile__card__header">
              <img src="https://source.unsplash.com/random?business" alt="header__image" />
              <div className="profile_avatar">
                  <img src={props.user && props.user.photo} alt="user__image" />
              </div>
             
            </div>
            <div className="profile__card__body">
                  <h3>{props.user && props.user.name}</h3>
                  <span>{props.user && props.user.position}</span>
              </div>
              <div className="profile__views">
                  <span>Who viewed your profile <strong>20</strong></span>
                  <span>Who viewed your Video <strong>120</strong></span>
              </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    user: state.appReducer.user
})

const mapDispatchToProps = (dispatch)=>({
    setUser:(user)=>(dispatch(setUser(user)))
})

export default connect(mapStateToProps,mapDispatchToProps)(FeedProfileCard)
