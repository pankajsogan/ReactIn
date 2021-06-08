import React from 'react'
import { connect } from 'react-redux'
import NetworkIcon from '../assets/Network';
import Navbar from '../components/Navbar';
import { setActivePage } from '../redux/actions/_appAction';


function QuestionIcon(){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
   <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
 </svg>
}

function EditProfile(){
   return <div className="edit__profile__panel">
      <span><a href="/">Edit public profile & URL</a><QuestionIcon/></span>
      <span><a href="/">Add prifile in another language</a><QuestionIcon/></span>
   </div>
}

function DashBoardCard({title,subtitle}){
   return <div className="dashboard__card">
      <span>{title}</span>
      <span>{subtitle}</span>
   </div>
}

function CardBig({Icon,title,subtitle}){
   console.log(Icon);
      return (<div className="dashbaord__card__big">
            {Icon}
            <div className="card__textual">
               <h4>{title}</h4>
               <h5>{subtitle}</h5>
            </div>
      </div>)
}

function SatelliteIcon(){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
   <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
 </svg>
}

function SalaryIcon(){
   return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
   <path d="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17H4zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z"></path>
 </svg>
}

function BookMarkIcon(){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
   <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
 </svg>;
}

function Profile(props) {

   React.useEffect(() =>{
      props.setActivePage("profile");
   },
   // eslint-disable-next-line
   [])
   return (
      <div>
          <Navbar/>

          <div className="profile__body">
             <div className="profile__body_wrapper">
                <div className="profile__main">
                    <div className="profile__main__header">
                       <div className="profile__header__cover">

                          <div className="pencil__btn">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
</svg>
                          </div>
                          <img src={`https://source.unsplash.com/random?${props.uset && props.user.position}`} alt="" className="profile__cover__image" />
                       <div className="profile__header_avatar">
                          <img src={props.user && props.user.photo} alt="user__avatar" />
                       </div>
                       </div>

                       <div className="profile__header__body">
                          <div className="profile__body__left">
                              <div className="profile__body__left__top">
                                <div className="user__info">
                                <h3>{props.user && props.user.name}</h3>
                                 <p>Self Taught Web Developer</p>
                                </div>
                                 <span className="talks__about">Talks about #webdesign #react #webdeveloper and #webdevelopment</span>
                                 <div className="user__city">Bengaluru,Karnatka,India <a href="/">Contact info</a></div>

                                 <div className="user__foloowers__following">
                                    <span><a href="/">209 followers</a></span>
                                    <span><a href="/">211 connections</a></span>
                                 </div>

                                 <div className="profile__controls">
                                    <button>Open to</button>
                                    <button>Add Section</button>
                                    <button>More</button>
                                 </div>

                              </div>
                          </div>
                          {/* <div className="profile__body__right">
                             <span><img src="https://media-exp1.licdn.com/dms/image/C560BAQHE1Wj95ZJWaA/company-logo_100_100/0/1590740077523?e=1631145600&v=beta&t=EhyHERrRsjGFEx54E_QN5_GIeDihITAqMEz8rWUfYM0" alt="headline__icon" className="headline__logo" />Sir M Vishvesaraya Institute of Technology</span>
                          </div> */}
                       </div>

                       {/* <div className="profile__body__footer">
                          <div className="started__cards">
                             <div className="start__card"></div>
                          </div>
                       </div> */}
                       
                    </div>

                   

                   <div className="user_dashboard">
                        <div className="dashboard__header">
                           <div className="title__wrapper">
                              <h2>Your Dashboard</h2>
                              <h3>Private to you</h3>
                           </div>
                           <div className="all__star">
                              <li>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <path d="M12 5.66l1 2 2.24.34-1.62 1.57.38 2.23-2-1.05-2 1.05.38-2.23L8.76 8 11 7.67l1-2m0-3.91L9.84 6.07 5 6.77l3.5 3.41L7.67 15 12 12.73 16.33 15l-.83-4.82L19 6.77l-4.84-.7L12 1.75zM11 15h2v7h-2v-7zm4 2h2v4h-2v-4zm-8 0h2v4H7v-4z"></path>
</svg>
All star
                              </li>
                           </div>
                        </div>

                        <div className="dashboard__cards">
                           <DashBoardCard title="83" subtitle="Who viwed your profile"/>
                           <DashBoardCard title="13" subtitle="Video Views"/>
                           <DashBoardCard title="19" subtitle="Search appearances"/>
                        </div>

                        <div className="dashboard__cards__big">
                        <CardBig Icon={<SatelliteIcon/>} title="Creator mode" subtitle="Grow your audience and get discovered by highlighting content on your profile."/>
                        <CardBig Icon={<NetworkIcon/>} title="Manage my network" subtitle="Access and manage your connections, events and interests all in one place"/>
                        <CardBig Icon={<SalaryIcon/>} title="Salary insights" subtitle="See how your salary compares to others in the community"/>
                        <CardBig Icon={<BookMarkIcon/>} title="My items" subtitle="Keep track of your jobs, courses and articles"/>
                        </div>
                   </div>
                </div>

                <div className="profile__aside">
                  {/* <h1>Profile Aside</h1> */}
                       <EditProfile/>

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
   setActivePage:(activePage)=>(dispatch(setActivePage(activePage)))
})
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
