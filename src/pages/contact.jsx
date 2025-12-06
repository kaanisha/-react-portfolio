import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_krsbrxd",   // Your service ID
        "template_aivz8i2",  // Your template ID
        form.current,        // Form reference
        "oVFyYicRFr_OJTBFK"  // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
