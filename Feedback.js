
import { useState } from "react";
import React from 'react'
import Popup from './pop';




export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false);
 
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  

 
  
  const [name, setname] = useState('');
  const[nameerror,setnameerror]=useState(false);
  const [emailid, setemailid] = useState('');
  const[phonenoerror,setphonenoerror]=useState(false);
  const [phoneno, setphoneno] = useState('');
  const [userinfo1, setUserInfo1] = useState('');
  const [userinfo2, setUserInfo2] = useState('');
  const [userinfo3, setUserInfo3] = useState('');
  const [userinfo4, setUserInfo4] = useState('');
 
  
  function handleChange1(e){
    
   
    setUserInfo1(e.target.value);

    }


    function handleChange2(e){
    
      setUserInfo2(e.target.value)
      
    }
    function handleChange3(e){
    
      setUserInfo3(e.target.value)
      
    }
    function handleChange4(e){
    
      setUserInfo4(e.target.value)
      
    }
  
    
  

      


  function onChangename(e) {
    let i=e.target.value;
    let l=i.length;
     if(l<4)
     {
       setnameerror(true);
     }else{
       setnameerror(false);
       
     }
     setname(i);
  }

  function onChangeemailid(e) {
      setemailid(e.target.value)

  }
  function onChangephoneno(e) {
   
    let i=e.target.value;
    let l=i.length;
     if(l<10)
     {
       setphonenoerror(true);
     }else{
       setphonenoerror(false);
       
     }
     setphoneno(i);
}


  function onSubmit(e) 
  {
      e.preventDefault();
      localStorage.setItem('name', name);

      localStorage.setItem('emailid', emailid);
      localStorage.setItem('phoneno', phoneno);
    
      localStorage.setItem('degrees1',userinfo1);
      localStorage.setItem('degrees2',userinfo2);
      localStorage.setItem('degrees3',userinfo3);
      localStorage.setItem('degrees4',userinfo4);
    
     setname('');
     setphoneno('');
     setemailid('');
     e.target.reset();
      
  }

  function getData() {
     console.log(localStorage.getItem('name'));
      console.log(localStorage.getItem('emailid'))
      console.log(localStorage.getItem('phoneno'))
      console.log(localStorage.getItem('degrees1'))
      console.log(localStorage.getItem('degrees2'))
      console.log(localStorage.getItem('degrees3'))
      console.log(localStorage.getItem('degrees4')) 
 }

  
      
  
  return (
    
    
      <form onSubmit={onSubmit}>
                        <div>
                            <label>Name *</label>
                            <input type="text"value={name} onChange={onChangename} />
                            {nameerror?<span>Invalid Name</span>:""}
                        </div>
                       
                        <div>
                            <label>Email-ID *</label>
                            <input type="text" value={emailid} onChange={onChangeemailid} />
                            
                        </div>
                        <div>
                            <label>Phone Number *</label>
                            <input type="value" value={phoneno} onChange={onChangephoneno} />
                            {phonenoerror?<span>Invalid phoneno</span>:""}
                        </div>
                       
      
      
      

      <div id='checkbox1' >
      <p>Please rate the quality of the services you recieved from your host.</p>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="excellent" id="flexCheckDefault" onChange={handleChange1} ></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Excellent</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="good" id="flexCheckDefault" onChange={handleChange1}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Good</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="fair" id="flexCheckDefault" onChange={handleChange1}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Fair</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="bad" id="flexCheckDefault" onChange={handleChange1}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Bad</label>


      </div>

      <div id='checkbox2' >
      <p>Please rate the quality of the beverage.</p>
      <input className="form-check-input" type="checkbox" name="degrees"
            value="excellent" id="flexCheckDefault" onChange={handleChange2}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Excellent</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="good" id="flexCheckDefault" onChange={handleChange2}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Good</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="fair" id="flexCheckDefault" onChange={handleChange2}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Fair</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="bad" id="flexCheckDefault" onChange={handleChange2}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Bad</label>
      </div>
      
      <div id='checkbox3' >
      <p>Was our restaurant clean.</p>
      <input className="form-check-input" type="checkbox" name="degrees"
            value="excellent" id="flexCheckDefault" onChange={handleChange3}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Excellent</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="good" id="flexCheckDefault" onChange={handleChange3}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Good</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="fair" id="flexCheckDefault" onChange={handleChange3}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Fair</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="bad" id="flexCheckDefault" onChange={handleChange3}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Bad</label>
      </div>

      <div id='checkbox4' >
      <p>Please rate your overall dining experience.</p>
      <input className="form-check-input" type="checkbox" name="degrees"
            value="excellent" id="flexCheckDefault" onChange={handleChange4}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Excellent</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="good" id="flexCheckDefault" onChange={handleChange4}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Good</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="fair" id="flexCheckDefault" onChange={handleChange4}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Fair</label>

      <input className="form-check-input" type="checkbox" name="degrees"
            value="bad" id="flexCheckDefault" onChange={handleChange4}></input>
      <label className="form-check-label" htmlFor="flexCheckDefault">Bad</label>
      </div>
      <button type="submit" value="Click to Open Popup"
      onClick={togglePopup} >Submit Review</button>
      <button type="button" onClick={getData}>Get Information</button>
      {isOpen && <Popup
    content={<>
     
     <i class="fa-solid fa-circle-check fa-5x"></i>
      <h2>Thank you for providing your valuable feedback.</h2>
      <h3>We will work towards improving your experience.</h3>

     
    </>}
    handleClose={togglePopup}
  />}


    
      
 </form>
    
  
  
)
}




