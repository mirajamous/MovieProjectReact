import emailjs from '@emailjs/browser';
import React,{useRef} from "react";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import "./Contact.css";
// import "./About.css";
// let clientId ="959155559808-d7nj9hjsu292gl2g9qssncomo1avgd13.apps.googleusercontent.com";
// let clientSecret="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";
let MyServiceId='service_fcoxknn';
let MyTemplateId='template_l1jj4l4';
let MyPublicKey='VNvYxrrPv4YUcu1RK';

function Contact() {
    const [show, setShow] = useState(false);
    const [myname,setmyname]=useState("");
    const [myemail,setmyemail]=useState("");
    const [mytext,setmytext]=useState("");
    const form = useRef();
    const mynamechange=(e)=>{
        setmyname(e.target.value);
    }
    const myemailchange=(e)=>{
        setmyemail(e.target.value);
    }
    const mytextchange=(e)=>{
        setmytext(e.target.value);
    }

    const sendEmail = (e) => {
        
      e.preventDefault();
    
      emailjs.sendForm(
        MyServiceId,
         MyTemplateId,
          form.current,
           MyPublicKey)
  
        .then((result) => {
            console.log(result.text); 
            console.log("message sent sucsessfully"); 
            setShow(true)
            setmyname("");
            setmyemail("");
            setmytext("");
        }, (error) => {
            console.log(error.text);
            setShow(false)
        });
       
        
    };

    return (
      
        <>
        <div className='bigAlert'>
        <Alert show={show} variant="success" className='my-alert'>
        <Alert.Heading>sent succesfully</Alert.Heading>
        {/* <p>
        
        </p> */}
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

    
        </div>
        <div className="bigLogin">
            
            <div className="FormBox">
                <form ref={form} onSubmit={sendEmail} className="form" >
                    <h2>Contact Us</h2>
                    <div className='Box-input-form'>
                        <label>Name</label>
                    <input type="text" name="userName" value={myname} onChange={mynamechange}/>
                    </div>
                    <div className='Box-input-form'>
                    <label>Email</label>
                    <input type="email" name="userEmail" value={myemail} onChange={myemailchange}/>
                    </div>
                    <div className='Box-input-form'>
                        <label>Message</label><br/>
                    <textarea name="message" rows="5" cols="40" value={mytext} onChange={mytextchange}/>
                    </div>
                    
                    <input type="submit" value="Send" className='btn-submit'/>
                </form>

            </div>
            
        </div></>

    )
}
export default Contact;