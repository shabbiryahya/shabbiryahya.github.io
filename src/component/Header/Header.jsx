import React from 'react';
import './Header.css';
import './CTA';
import CTA from './CTA';
// import me from '../../assests/me.png';
import me from '../../assests/123.png';

// import me from '../../assests/mem.png';

import HeaderSocials from './HeaderSocials';
import { MdVerified } from 'react-icons/md';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Shabbir Yahya</h1>{' '}
          <span>
            <MdVerified className="verified" />
          </span>
        </div>

        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me"><img src={me} alt="me" /></div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
