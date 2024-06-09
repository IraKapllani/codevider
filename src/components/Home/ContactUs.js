import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_c2cskej', 'template_tgj0x6b', form.current, 'HRZxFHbB071q3qEwo')
			.then(
				() => {
					setEmail("");
					setMessage("");
					alert('Message sent successfully!');
				},
				(error) => {
					alert('Failed to send message. Please try again.', error.text);
				}
			);
	};

	return (
		<div className="d-flex justify-content-center py-5">
			<form ref={form} className="contact-form">
				<div className="contact-title">Contact Us</div>
				<input name="email" type="email" placeholder="Your email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)}/>
				<textarea name="message" placeholder="Your message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
				<button onClick={sendEmail}>Submit</button>
			</form>
		</div>
	);
}

export default ContactUs;