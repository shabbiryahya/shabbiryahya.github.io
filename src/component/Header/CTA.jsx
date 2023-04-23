import React from 'react';
import CV from '../../assests/CV.pdf';

function CTA() {
  return (
    <div className="cta">
      <a className="btn" rel='noreferrer' href={CV} target="_blank">
        Download
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
