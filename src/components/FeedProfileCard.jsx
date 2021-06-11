import React from 'react';
import "./FeedCardProfile.css";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import BookMarkIcon from '../assets/BookMarkIcon';

function FeedProfileCard(props) {
    
   
    return (
        <Link to={`/${props.user && props.user._id}`} style={{textDecoration:"none"}}><div className="feedProfileCard">
            <div className="profile__card__header">
              <img src={`https://source.unsplash.com/random?${props.uset && props.user.position}`} alt="header__image" />
              <div className="profile_avatar">
                  <img src={props.user && props.user.avatar} alt="user__image" />
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

              <div className="profile_card__footer">
                  <span><BookMarkIcon/> My items</span>
              </div>
        </div>
        </Link>
    )
}

const mapStateToProps = (state)=>({
    user: state.appReducer.user
})



export default connect(mapStateToProps)(FeedProfileCard)
