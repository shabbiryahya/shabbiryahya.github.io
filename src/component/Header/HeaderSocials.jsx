import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/shabbir-yahya-079735248/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>

      <a
        href="https://github.com/shabbiryahya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://dribbble.com/Sebyy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
