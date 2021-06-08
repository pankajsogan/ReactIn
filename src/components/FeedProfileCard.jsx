import React from 'react';
import "./FeedCardProfile.css";
import axios from "axios";
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/_appAction';
import {Link} from 'react-router-dom'

function FeedProfileCard(props) {
    
   
    return (
        <Link to="/sumit-1234" style={{textDecoration:"none"}}><div className="feedProfileCard">
            <div className="profile__card__header">
              <img src={`https://source.unsplash.com/random?${props.uset && props.user.position}`} alt="header__image" />
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
        </Link>
    )
}

const mapStateToProps = (state)=>({
    user: state.appReducer.user
})



export default connect(mapStateToProps)(FeedProfileCard)
