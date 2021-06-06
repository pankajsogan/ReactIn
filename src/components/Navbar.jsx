import React from 'react'
import { connect } from 'react-redux';
import BellIcon from '../assets/BellIcon';
import HomeIcon from '../assets/HomeIcon'
import JobIcon from '../assets/JobIcon';
import Logo from '../assets/Logo'
import MessageIcon from '../assets/MessageIcon';
import NetworkIcon from "../assets/Network";
import { setUser,setDrop } from '../redux/actions/_appAction';
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';


function DropDown ({props}){
    console.log(props);
    return (
        <div className="navbar__dropdown">
      <div className="dropdown__header">
          <div className="drop__user__profile">
              <div className="user__drop__avatar">
                  <img src={props.user && props.user.photo} alt="user__avatar"/>
              </div>
              <div className="user__drop__textual">
                  <h3>{props.user && props.user.name}</h3>
                  <p>{props.user && props.user.position}</p>
              </div>
          </div>
          <div className="header__top__button">
              <button>View Profile</button>
          </div>
      </div>
      <div className="dropdown__body">
          <ul className="account">
              <li>Account</li>
              <li>
                  <ul className="sublist">
              <li>Settings & Privacy</li>
              <li>Help</li>
              <li>Language</li></ul></li>
          </ul>
          <ul className="manage">

              <li>Manage</li>
              <li>
                  <ul className="sublist">
                  <li>Settings & Privacy</li>
              <li>Help</li>
              <li>Language</li>
                  </ul>
              </li>
          </ul>
          <div className="dropdown__logout">
              <button>Signout</button>
          </div>
      </div>
  </div>
    )
}

function Navbar(props) {

    const [isDrop,setDrop] = React.useState(false);
    return (
        <div className="header__main">
            <div className="header__wrapper">
                <h1 className="brand__logo">
                    <Logo/>
                </h1>
                <div className="header__search">
                       <div className="header__search__wraper">
                       <SearchIcon/>
                    <input type="text" name="key" id="key" placeholder="Search"/>
                       </div>
                </div>
                <div className="nav__main">
                    <a href="/" className="active__link">
                        <HomeIcon/>
                        Home</a>
                    <a href="">
                        <NetworkIcon/>
                        My Network</a>
                    <a href="">
                        <JobIcon/>
                        Jobs</a>
                    <a href="">
                        <MessageIcon/>
                        Messaging</a>
                    <a href="">
                        <BellIcon/>
                        Notifications</a>
                    <div className="nav__avatar" onClick={()=>props.setDrop(!props.drop)}>
                        <div className="avatar__nav">
                            <img src={props.user && props.user.photo} alt="user__avatar" />
                        </div>
                        <span>Me <svg id="global-nav-icon--classic__down-arrow" width="16" height="16" data-supported-dps="16x16">
    <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
  </svg></span>

 {props.drop &&  <DropDown props={props}/>}

  
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    user: state.appReducer.user,
    drop:state.appReducer.drop
})

const mapDispatchToProps = (dispatch)=>({
    setUser:(user)=>(dispatch(setUser(user))),
    setDrop:(drop)=>(dispatch(setDrop(drop))),
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)

