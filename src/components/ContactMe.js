import axios from "axios";
import { useRef } from "react";
import Classes from "./ContactMe.module.css";
const ContactMe = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    await axios.post(
      "https://kesava-prasad-default-rtdb.firebaseio.com/messages.json",
      obj
    );
    try {
      window.alert(
        "message received successfully!!! i will get back to you soon"
      );

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="contactMe" className={Classes.contactMe}>
      <div className={Classes.deets}>
        <h1>Contact Me</h1>
        <p>91-9600150655</p>
        <p>kesav2661998@gmail.com</p>
      </div>
      <div className={Classes.query}>
        <form onSubmit={submitHandler}>
          <h1>Drop a Message</h1>
          <input ref={nameRef} type="text" placeholder="Your Name" />
          <input ref={emailRef} type="email" placeholder="E-mail" />
          <textarea ref={messageRef} placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default ContactMe;
