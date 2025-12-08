import React, { useRef, useState } from "react";
import Prism from "../components/Aurora"; 
import "./Contact.css";
import emailjs from "@emailjs/browser";



export default function Contact() {
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
          setTimeout(() => setStatus(""), 5000);
        },
        () => {
          setStatus("Failed to send message. Try again.");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <div className="contact-page">
      <Prism
        animationType="rotate"
        timeScale={0.6}
        height={3.2}
        baseWidth={5.2}
        scale={3.4}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />
      <div className="contact-foreground">
        <div className="contact-inner">
          <div className="left-col">
            <div className="left-content">
              <h1 className="title">
                <span className="title-highlight">Contact</span> me
              </h1>

              <p className="desc">
                Have an idea, a question, or just want to say hi? I’m all ears — send me a message and let’s turn thoughts into action together.
              </p>

              <div className="small-info-card" aria-hidden="true">
                <div className="small-row">
                  <span className="small-icon mail-icon" dangerouslySetInnerHTML={{__html:
                    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="4.5" width="21" height="14" rx="2" stroke="#000" stroke-width="1.4"/><path d="M3 7.5L12 13L21 7.5" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                  }} />
                  <span className="small-text">kaanisha03@gmail.com</span>
                </div>

                <div className="small-row">
                  <span className="small-icon phone-icon" dangerouslySetInnerHTML={{__html:
                    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a1 1 0 0 1 1 .75c.12.67.35 1.65.78 2.65a1 1 0 0 1-.24 1.05L8.91 9.91a15.05 15.05 0 0 0 6.18 6.18l1.46-1.46a1 1 0 0 1 1.05-.24c1 .43 1.98.66 2.65.78a1 1 0 0 1 .75 1V20z" stroke="#000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                  }} />
                  <span className="small-text">+91 9629927103</span>
                </div>
              </div>
            </div>

            {/* decorative vertical black stripe like screenshot */}
            <div className="left-stripe" />
          </div>

          {/* RIGHT: form card */}
          <div className="right-col">
            <div className="form-card">
              <form ref={form} onSubmit={sendEmail} className="form-grid">
                <div className="grid-row top-row">
                  <label className="field">
                    <div className="field-label">Name</div>
                    <div className="input-wrap">
                      <input name="user_name" type="text" placeholder="your name" required/>
                    </div>
                  </label>

                  <label className="field">
                    <div className="field-label">Email</div>
                    <div className="input-wrap">
                      <input name="user_email" type="email" placeholder="yourmail@email.com" required/>
                    </div>
                  </label>
                </div>

                <div className="grid-row top-row">
                  <label className="field">
                    <div className="field-label">Phone</div>
                    <div className="input-wrap">
                      <input name="phone" type="text" placeholder="(245) 245 - 1345" />
                    </div>
                  </label>

                  <label className="field">
                    <div className="field-label">Subject</div>
                    <div className="input-wrap">
                      <select name="subject">
                        <option value="">Select</option>
                        <option value="work">Work</option>
                        <option value="hire">Hire</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="select-arrow" />
                    </div>
                  </label>
                </div>

                <label className="field full-width">
                  <div className="field-label">Message</div>
                  <div className="input-wrap">
                    <textarea name="message" placeholder="Please write your message..." required />
                  </div>
                </label>

                <div className="submit-row">
                  <button type="submit" className="send-btn">Send message</button>
                </div>

                {status && <div className="status">{status}</div>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
