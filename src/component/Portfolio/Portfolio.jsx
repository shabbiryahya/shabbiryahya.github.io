import React from 'react';
import './Portfolio.css';
// import IMG1 from '../../assests/portfolio1.jpg';
// import IMG2 from '../../assests/portfolio2.jpg';
// import IMG3 from '../../assests/portfolio3.jpg';
// import IMG4 from '../../assests/portfolio4.jpg';
// import IMG5 from '../../assests/portfolio5.png';
// import IMG6 from '../../assests/portfolio6.jpg';
const portfolio = [
  {
    id: 1,
    image: 'https://miro.medium.com/max/720/1*YOQ_IezeXsoIuGfHXxByxA.webp',
    title: 'Clone | anthropologie.com | HTML,CSS,JS',
    github: 'https://github.com/shabbiryahya/Anthropologie-Project',
    demo: 'https://anthropologie-clonee.netlify.app/',
  },
  {
    id: 2,
    image: 'https://miro.medium.com/max/720/1*QDrkucVhvJE-VdH6KUmDsw.webp',
    title: 'Mimic of walmart.com | HTML,CSS,Advance JS',
    github: 'https://github.com/shabbiryahya/walmartclone',
    demo: 'https://silver-crostata-a527c0.netlify.app',
  },
  {
    id: 3,
    image: 'https://miro.medium.com/max/720/1*32bGHl2HsO8H0usbAQgDJg.webp',
    title: 'Clone | Bliss World | HTML,CSS,Advance JS,React-Redux ',
    github: 'https://github.com/shabbiryahya/BlissWorld-clone',
    demo: 'https://blissworld-clone-alpha.netlify.app/',
  },
  {
    id: 4,
    image:
      'https://camo.githubusercontent.com/fdae98ad115f5ac478d95e537f239b070f24bb7ff310420d6c202e9ad26651f2/68747470733a2f2f692e6962622e636f2f66464b373252472f323032332d30312d30392d312e706e67',
    title: 'Clone | Flipkart.com| HTML, CSS, Advance JS, React Js , Redux ',
    github: 'https://github.com/shabbiryahya/Flipkart',
    demo: 'https://flipkart-clone-masai.netlify.app/',
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
              <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
