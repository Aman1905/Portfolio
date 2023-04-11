import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  //   You can add your code to submit the form data here.
  // };

  return (
    // <div className={styles.myContacts}>
    // <div className={styles.contact__container}>
    //   <div className={styles.contact__heading}>
    //     <h1>Let's Connect</h1>
    //   </div>
    //   <form className={styles.contactForm} onSubmit={handleSubmit}>
    //     <div className={styles.form__group}>
    //       <label className={styles.formLabel} htmlFor="name">Name:</label>
    //       <input
    //         className={styles.formInput}
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={name}
    //         onChange={(event) => setName(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <div className={styles.form__group}>
    //       <label className={styles.formLabel} htmlFor="email">Email:</label>
    //       <input
    //         className={styles.formInput}
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <div className={styles.form__group}>
    //       <label className={styles.formLabel} htmlFor="message">Message:</label>
    //       <textarea
    //         className={styles.formInput}
    //         id="message"
    //         name="message"
    //         value={message}
    //         onChange={(event) => setMessage(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Send Message</button>
    //   </form>
    // </div>
    // </div>
    <div className={styles.myContacts}>
      <h1>Hello World</h1>
    </div>
  )
}

export default Contact