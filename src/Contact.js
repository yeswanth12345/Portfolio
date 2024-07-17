import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
    });

    const [state, handleSubmit] = useForm("xyyqnjpz");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const clearForm = (event) => {
        event.preventDefault();
        handleSubmit(event);
        if (state.succeeded) {
            setFormData({
                name: "",
                email: "",
                subject: ""
            });
        }
    }

    return (
        <div className="contact-container">
            <h2 className="contact-title">Send me a message</h2>
            <form onSubmit={clearForm} className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="form--input"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="form--input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-group">
                    <textarea
                        placeholder="Subject"
                        className="form--input"
                        name="subject"
                        onChange={handleChange}
                        value={formData.subject}
                        required
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <button type="submit" className="form--submit" disabled={state.submitting}>
                Send 
                </button>

                {state.succeeded && <p className="success-message">Thank you for your message!</p>}
            </form>
        </div>
    );
}

export default Contact;
