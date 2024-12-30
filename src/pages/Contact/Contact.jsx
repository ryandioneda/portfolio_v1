import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const emailField = useRef();
    const [buttonText, setButtonText] = useState("Send")
    const [isEmailValid, setIsEmailValid] = useState(true);

    const validateEmail = () => {
        const emailValue = emailField.current.value
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(emailValue);

    }

    const sendEmail = (e) => {

        e.preventDefault();
        setButtonText("Sending...");

        if (!validateEmail()) {
            setIsEmailValid(false);
            setButtonText("Send")
            return
 
        }
        setIsEmailValid(true);

        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setButtonText("Sent!")
                    setTimeout(() => setButtonText("Send"), 5000); 
                },
                (error) => {
                    setButtonText("Send")
                },
            );
    };

    return (
       <div id="contact-wrapper" className="p-2.5 font-inter">
            <div id="main-contact-container" className="p-2 grid grid-cols-1 md:grid-cols-2">
                <div id="grid-col-1" className="col-span-1 p-1 md:flex md:justify-center">
                    <div id="contact-action-heading" className="text-slate opacity-50 text-[1.5rem] md:text-[3rem] mb-10 md:mb-0">
                        <p>Let's connect.</p>
                    </div>
                </div>

                <div id="grid-col2" className="col-span-1 p-1 text-ivory text-[1.15rem] md:text-[1.5rem] md:flex md:justify-start">
                    <div id="form-wrapper" className="md:pr-20">

                        {/* beginning of form */}
                        <form ref={form} onSubmit={sendEmail} method='POST'>
                            <div id="form-heading">
                                <p className="">Feel free to get in touch with any questions.</p>
                                <p className="mt-2.5">I would love to work together.</p>
                            </div>

                            <div id="email-form-container" className="w-full mt-10">
                                <div id="user-info" className="flex flex-row gap-5 w-full">
                                    <div id="name" className="">
                                        <div id="input-field" className="">
                                            <input autoComplete="off" id="name" type='text' name='user_name' placeholder="Name" className="text-[1.15rem] md:text-[1.15rem] w-full text-ivory bg-darkgray p-2.5" required></input>
                                        </div>
                                    </div>


                                    <div id="email" className="">
                                        <div id="email-field" className="">
                                            <input
                                                ref={emailField} 
                                                autoComplete="off" 
                                                id="email" 
                                                type='email' 
                                                name='user_email' 
                                                placeholder="Email" 
                                                className={`text-[1.15rem] md:text-[1.15rem] w-full text-ivory bg-darkgray p-2.5 ${!isEmailValid ? 'border-2 border-red-500' : ''}`}
                                                required>
                                            </input>
                                        </div>
                                    </div>

                                </div>

                                <div id="user-message" className="mt-3.5">
                                    <div id="message">
                                        <div id="message-field">
                                            <textarea autoComplete="off" placeholder="Message" id="message" name='message' className="text-[1.15rem] md:text-[1.15rem] w-full text-ivory bg-darkgray p-2.5 h-40" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div id="send-button" className="bg-[#0b468c] mt-1.5">
                                    <button className="w-full p-2.5" type='submit' value="Send">
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* end of form */}
                </div>

            </div>
       </div>
    )
}

export default Contact;