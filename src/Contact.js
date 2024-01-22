import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
    const [formData, setFormData] = React.useState({
        name : "",
        email :"",
        subject : "",
    })

    const [state, handleSubmit] = useForm("xyyqnjpz");

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevFormData)=>{
            return {...prevFormData,
            [name] : value
            }
        })
    }

    function clearForm(event){
        event.preventDefault();        
        handleSubmit(event);
        setFormData(()=>{
            return {
                name :"",
                email:"",
                subject:""
            }
        })
    }
    
    const emailAddress = 'yvuddula@hawk.iit.edu';
    return(
        <div className="contact-form">
                    <h2>Send me a message 🚀</h2>
                    <form onSubmit={clearForm}>
                        <input 
                            type="text" 
                            placeholder="Full name"
                            className="form--input"
                            name = "name"
                            onChange={handleChange}
                            value={formData.name}
                        />

                        <input 
                            type="email" 
                            placeholder="Email address"
                            className="form--input"
                            name = "email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <textarea
                            type="text" 
                            placeholder="Subject"
                            className="form--input"
                            name = "subject"
                            onChange={handleChange}
                            value={formData.subject}
                        />
                        <button 
                        className="form--submit">
                        Send message
                        </button>
                    </form>
                </div>
    )
}