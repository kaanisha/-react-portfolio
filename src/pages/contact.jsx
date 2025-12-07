import React, { useRef, useState } from "react";
import Prism from "../components/Aurora";   
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krsbrxd",   
        "template_aivz8i2",  
        form.current,
        "oVFyYicRFr_OJTBFK"  
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />
      <div className="contact-box">
        <h2>Contact Us</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-field">
            <label>Name</label>
            <input type="text" name="user_name" required />
          </div>

          <div className="input-field">
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>

          <div className="input-field">
            <label>Message</label>
            <textarea name="message" required />
          </div>

          <button type="submit" className="send-btn">Send</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}
