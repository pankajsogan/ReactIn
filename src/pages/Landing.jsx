import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";
import { setActivePage, setLogin } from "../redux/actions/_appAction";
import Cookies from "js-cookie";
import axios from "axios";
import {useHistory} from "react-router-dom";
import GoogleLogin from "react-google-login";

function Landing(props) {
const history = useHistory();
        React.useEffect(() =>{
                props.setActivePage("landing");
             },// eslint-disable-next-lines
[props])

const handleGoogleLogin = async(id)=>{
      

        try{
           const r =await axios.post(`http://localhost:5000/auth/login/google`,{id});
           return r.data;
        }
        catch(e){
           if(e.response && e.response.data){
              return e.response.data;
           }
        }
     }



const responseGoogle = (response) => {
        if(response.error){
           console.log(response)
            return alert("Eroor");
        }
        else{
            console.log("lOGIN WORKING");
            console.log(response);
        }
  
        const {googleId} = response.profileObj;
        handleGoogleLogin(googleId).then((data)=>{
           console.log(data);
  
           const {token} = data;
           console.log(token)
           Cookies.set("AUTH_TOKEN",token);
           props.setLogin(true);
           history.push('/feed');
        }).catch((err)=>{
           console.error(err);
        })
        
  
  
        
  
      }
  return (
    <div className="landing__page">
      <nav aria-label="Landing__primary" className="landing__nav">
        <a href="/" className="landing__brand">
          <span className="sr-only">LinkedIn</span>
          <img src={image} alt="" />
        </a>

        <div className="nav__main__landing">
          <Link to="/signup">Join now</Link>
          <Link to="/">Sign in</Link>
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
                                     

                                     <GoogleLogin
    clientId="71393599305-7666vtmaen3dcqmjucdvt17r2k8suvgj.apps.googleusercontent.com"
    buttonText="Login"
    render={renderProps => (
        <button className="btn__google__login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google__logo"/>
        <span>Sign in with Google</span>
        </button>
    
      )}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                             </div>
                     </div>
                     </div>
              </section>
      </main>
    </div>
  );
}


const mapDispatchToProps = (dispatch)=>({
        setActivePage:(activePage)=>(dispatch(setActivePage(activePage))),
        setLogin:(login)=>(dispatch(setLogin(login))),
    })

export default connect(null,mapDispatchToProps)(Landing);
