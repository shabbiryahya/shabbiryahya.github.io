import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
// import { MdEmail } from 'react-icons/md';
// import { FaLinkedin, FaAngellist, FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kbszkub',
        'template_zh2w04s',
        form.current,
        'gDk9wIv6C4sjEMqs2'
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert('Message Sent to Shabbir');
          toast.success('Message Sent to Shabbir', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
     
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>shabbirkatlariwala</h5>
            <a
              href="mailto:shabbirkatlariwala@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>shabbir-yahya</h5>
            <a
              href="https://www.linkedin.com/in/shabbir-yahya-079735248/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91-9574713452</h5>
            <a
              href=" https://wa.me/919574713452"
              // href="https://api.whatsapp.com/send?phone+919574713452"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
