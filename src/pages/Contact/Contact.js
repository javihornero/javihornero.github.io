import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <h1>Contact me</h1>
      <br />
      <hr />
      <div className="contact-container">
        <div className="description">Feel free to contact me</div>
        <form
          action="mailto:javihornerofatas@gmail.com"
          className="contact-form"
          enctype="text/plain"
        >
          <div className="row">
            <input type="text" placeholder="Name" name="ContactName" required />
            <input type="email" placeholder="Email" name="mail" required />
          </div>
          <div className="row">
            <input type="text" placeholder="Subject" name="subject" required />
          </div>
          <div className="row">
            <textarea
              type="text"
              placeholder="Message"
              name="ContactCommentt"
              required
            ></textarea>
          </div>
          <button type="submit">Send email</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
