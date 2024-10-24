import React, { useState } from "react";
import styles from "./Contact.module.css";

const ContactForm = () => {
  //declaring state variables 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic- commenting below out as we will add functionality at a later stage
    //console.log("Form submitted:", { name, email, message });
    return;
  };

  return (
    // form logic
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_title}>Get in touch.</div>
      <div >
        <label className={styles.name_label}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className={styles.email_label}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className={styles.message_label}>Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div></div>
      <button className={styles.submit_btn} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
