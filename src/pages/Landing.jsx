import React from "react";
import { connect } from "react-redux";
import image from "../assets/logo.png";
import { setActivePage } from "../redux/actions/_appAction";

function Landing(props) {

        React.useEffect(() =>{
                props.setActivePage("landing");
             },[])
  return (
    <div className="landing__page">
      <nav aria-label="Landing__primary" className="landing__nav">
        <a href="/" className="landing__brand">
          <span className="sr-only">LinkedIn</span>
          <img src={image} alt="" />
        </a>

        <div className="nav__main__landing">
          <a href="/">Join now</a>
          <a href="/">Sign in</a>
        </div>
      </nav>
      <main className="main__landing">
              <section className="section__hero">
                      <div className="section__hero__with__form">
                              <h1>Welcome to your professional community</h1>
                              <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="illustration_Desktop" className="illustration__desktop lazy__loading" />
                              <img src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="illustration_Mobile" className="illustration__mobile lazy__loading" />
                      </div>

                     <div className="form__login">
                     <div className="form__landing">
                             <div className="alert__hiddden">This is an alert message</div>
                             <div className="form__main">
                                     <div className="input" focusable="true">
                                             <input type="email" name="email" id="email" />
                                             <label htmlFor="email">Email or phone number</label>
                                     </div>
                                     <div className="input" focusable="true">
                                             <input type="password" name="pass" id="pass" />
                                             <label htmlFor="pass">Password</label>
                                     </div>
                             </div>
                             <a href="/" className="forgot__password">Forgot Password?</a>
                             <button className="login__btn">Signin</button>
                     </div>

                     <div className="auth__third__parties">
                             <div className="auth__divider"><span></span>or<span></span></div>
                             <div className="form__google__auth">
                                     <div className="btn__google__login">
                                     <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
                                     <span>Sign in with Google</span>
                                     </div>
                             </div>
                     </div>
                     </div>
              </section>
      </main>
    </div>
  );
}


const mapDispatchToProps = (dispatch)=>({
        setActivePage:(activePage)=>(dispatch(setActivePage(activePage)))
    })

export default connect(null,mapDispatchToProps)(Landing);
