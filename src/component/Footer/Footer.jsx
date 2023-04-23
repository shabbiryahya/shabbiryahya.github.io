/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import {
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Shabbir Yahya
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/shabbir-yahya-079735248/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/919574713452" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="https://twitter.com/ifsebyy" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://github.com/shabbiryahya" target="_blank">
          <FaGithub />
        </a>
        <a href="https://medium.com/@shabbirkatlariwala" target="_blank">
          <FaMedium />
        </a>
        <a href="tel:+919574713452" target="_blank">
          <BiPhoneCall />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ShabbirYahya Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
