import axios from 'axios';
import React from 'react';
import Cookies from "js-cookie";
import { useHistory } from 'react-router';


function Navbar(){
   return(
      <header className="onboardingNav">
         <a href="/">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 26" data-supported-dps="102x26" fill="currentColor" class="mercado-match" width="102" height="26" focusable="false">
  <g>
    <path class="background-mercado" d="M13 10h4v12h-4zm2-6.2A2.2 2.2 0 1017.25 6 2.19 2.19 0 0015 3.8zM4 4H0v18h11v-4H4zm53.9 12.2v.8h-9a2 2 0 00.07.5 2.83 2.83 0 002.91 1.89 3.62 3.62 0 002.85-1.2l2.72 1.68a7 7 0 01-5.67 2.43c-3.59 0-6.66-2.05-6.66-6.19a6.2 6.2 0 016.53-6.4c3.43 0 6.25 2.29 6.25 6.49zm-3.75-1.51a2.23 2.23 0 00-2.52-2.28 2.54 2.54 0 00-2.75 2.28zM68 4h4v18h-3.39v-1.43a4.53 4.53 0 01-3.88 1.68c-2.51 0-5.55-1.86-5.55-6.25 0-3.92 2.69-6.25 5.5-6.25A4.26 4.26 0 0168 11.11zm.3 12c0-1.88-1.17-3.13-2.66-3.13a3 3 0 00-3 3.11 3 3 0 003 3.09A2.79 2.79 0 0068.3 16zm-22.54-6H41l-3.93 4.9H37V4h-4v18h4v-5.73h.07l4 5.73H46l-5-6.52zm-19.23-.3a4.44 4.44 0 00-3.78 2h-.05V10H19v12h4v-6.53a2.26 2.26 0 012.21-2.57c1.1 0 1.79.59 1.79 2.52V22h4v-7.44c0-3.65-2.29-4.86-4.47-4.86zM102 2v22a2 2 0 01-2 2H78a2 2 0 01-2-2V2a2 2 0 012-2h22a2 2 0 012 2zm-18 8h-4v12h4zm.25-4A2.25 2.25 0 1082 8.2 2.19 2.19 0 0084.25 6zM98 14.56c0-3.65-2.29-4.9-4.47-4.9a4.46 4.46 0 00-3.78 2.05V10H86v12h4v-6.53a2.26 2.26 0 012.21-2.57c1.1 0 1.79.59 1.79 2.52V22h4z"></path>
  </g>
</svg>
         </a>
      </header>
   )
}


function Location(){
const history = useHistory();
   const [country,setCountry] = React.useState("");
   const [city,setCity] = React.useState("");
   const [countries,setCountries] = React.useState(null);
   const [filtered,setFiltered] = React.useState(null);
   const [filteredCity,setFilteredCity] = React.useState(null);
   const [selectedCountry,setSelectedCountry] = React.useState(false);
   const [selectedCity,setSelectedCity] = React.useState(false);


   React.useEffect(() =>{
      const getCountries = async () => {
         try {
           const r = await fetch(
             `https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json`
           );
           return r.json();
         } catch (e) {
           if (e.response && e.response.data) {
           // console.log(e.response.data);
           }
         }
       };

       getCountries().then((data)=>{
          console.log(data);
          setCountries(data);
       })
   },[])


   const handleCountry = (e)=>{
      
      setCountry(e.target.value);
      if(country.length>1){
         const filteredCountry = countries && countries.filter((country)=>country.name.toLowerCase().includes(e.target.value.toLowerCase()));
      
      setFiltered(filteredCountry);
      }
      else{
         setFiltered(null);
      }
   }


   const handleCity = async (e)=>{
try{
   if(selectedCountry){
      setCity(e.target.value);
   const r = await axios.post(`https://countriesnow.space/api/v0.1/countries/cities`,{country:selectedCountry});
   setFilteredCity(r.data.data.filter((city)=>city.toLowerCase().includes(e.target.value.toLowerCase())));
   }

}
catch(e){
   console.log(e);
}
   }

   console.log(filteredCity);



   const handleSaveLocation = async ()=>{

      if(selectedCountry && selectedCity){

         const uid = Cookies.get("GOOGLE_CRED");
        
         try{
            const r = await axios.put(`https://enigmatic-dusk-99502.herokuapp.com/auth/update/location`,{country:selectedCountry,city:selectedCity,uid:uid});
            console.log(r);
            if(r.status===200){
               history.push('/onboarding/start/profile-edit/new/')
            }
         }
         catch(e){
            console.log(e);
         }
      }
   }
   return (
      <>
      <div className="onboarding__header">
      <h1>Welcome</h1>
      <h2>Let’s start your profile, connect to people you know, and engage with them on topics you care about.</h2>
   </div>

   <section className="onboarding__section">
       <div className="onboarding__profile__form">
          <div className="onboarding__field">
             <label htmlFor="country">Country/Region * </label>
             <input type="text" name="country" id="country"  value={country} onChange={handleCountry}/>
             <div className="country__dropdowns">
                {
                   filtered && filtered.map((country,i)=>{
                      return <span key={i} className="country__list" onClick={()=>{
                         setSelectedCountry(country.name)
                         setFiltered(null);
                         setCountry(country.name);
                      }}>{country.name}</span>
                   })
                }
             </div>
          </div>
          <div className="onboarding__field">
             <label htmlFor="city">City/District * </label>
             <input type="text" name="city" id="city" value={city} onChange={handleCity}/>
             <div className="country__dropdowns">
                {
                   filteredCity && filteredCity.map((city,i)=>{
                      return <span key={i} className="country__list" onClick={()=>{
                         setSelectedCity(city)
                         setFilteredCity(null);
                         setCity(city);
                      }}>{city}</span>
                   })
                }
             </div>
          </div>

          <button className="next__btn" onClick={handleSaveLocation}>Next</button>
       </div>
   </section>
   </>
   )
}


function JobTitle(){

   const [title,setTitle] =React.useState("");
   const history = useHistory();

   const handleTitleSave = async ()=>{
      console.log(title)
      if(title){
         console.log("clicked")
         const uid = Cookies.get("GOOGLE_CRED");
        
         try{
            const r = await axios.put(`https://enigmatic-dusk-99502.herokuapp.com/auth/update/title`,{title,uid:uid});
            console.log(r);
            if(r.status===200){
               history.push('/onboarding/start/job-seeker-intent/new/');
            }
         }
         catch(e){
            console.log(e);
         }
      }
   }
   return <div className="jobtitle__form">
      <div className="jobtitle__header">
         <h1>Your profile helps you discover new people and opportunities</h1>
      </div>
      <div className="jobtitle__form__section">
         <div className="jobtitle__form__field">
            <label htmlFor="title">Most recent job title </label>
            <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
         </div>
         {/* <div className="default__title">
            <button onClick={()=>setTitle("Student")}>I'm a student</button>
         </div> */}
         <button className="continue__btn" onClick={(handleTitleSave)}>Continue</button>
      </div>
   </div>
}


function JobSeeker(){
const history = useHistory();
   const moveToJob = ()=>{
      history.push('/onboarding/start/open-to-job-opportunity/new');
   }

   const moveFeed =()=>{
      history.push('/feed');
   }
return(
   <div className="job__seeker__section">
      <div className="job__seeker__header">
         <h1>Are you looking for a new job?</h1>
         <h2>We can help you prepare for your search. Your response is private to you.</h2>
      </div>
      <div className="job__seeker__buttons">
         <button onClick={moveToJob}>Yes</button>
         <button onClick={moveFeed}>Not now</button>
      </div>
   </div>
)
}


function JobOpportunity(){
   const [title,setTitle] = React.useState("");
   const [jobLocation,setLocation] = React.useState("");
   const history = useHistory();
   const uid = Cookies.get("GOOGLE_CRED");
   const handleOpenJob = async ()=>{

      if(title && jobLocation){
         try{
            const r = await axios.put('https://enigmatic-dusk-99502.herokuapp.com/auth/update/openjob',{title,jobLocation,uid});
            if(r.status===200){
               history.push('/feed');
            }
         }
         catch(e){
            console.log(e);
         }
      }
   }
   return (
      <div className="job_seletion">
         <div className="job_selection__header">
            <h1>What kind of job are you looking for?</h1>
         </div>

         <div className="job__selection__from">
            <div className="job__selection__form__field">
               <label htmlFor="title">Job title *</label>
               <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Ex:Sales Manager"/>
            </div>
            <div className="job__selection__form__field">
               <label htmlFor="job__location">Job location *</label>
               <input type="text" name="job__location" id="job__location" value={jobLocation} onChange={(e)=>setLocation(e.target.value)} placeholder="Ex:Portland,Oregon" />
            </div>

            <button className="next__btn" onClick={handleOpenJob}>Next</button>
         </div>
      </div>
   )
}

function Onboarding({type}) {

  
      //onboarding/start/profile-edit/new/
   
   return (
      <div className="onboarding">
         <Navbar/>

         <div className="onboarding__body">
          {
             type==="profile-location" && <Location/>
          }
          {
             type==="profile-edit" && <JobTitle/>
          }
          {
             type==="job-seeker-intent" && <JobSeeker/>
          }
          {
             type==="open-to-job-opportunity" && <JobOpportunity/>
          }
         </div>
      </div>
   )
}

export default Onboarding;
