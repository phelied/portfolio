import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretRight, faFolder, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import weathy from './images/Weathy-screen.png';
function App() {

  const data = [
    {
      title: 'Weathy',
      description: 'Weathy is a weather app that allows you to check the weather in your city and in the cities of your choice. It also allows you to save your favorite cities and to see the weather forecast for the next 5 days.',
      image: 'https://i.ibb.co/0nZ3Z3T/weathy.png',
      link: 'https://weathy.netlify.app/',
      github: ''
    },
    {
      title: 'portfolio',
      description: 'Weathy is a weather app that allows you to check the weather in your city and in the cities of your choice. It also allows you to save your favorite cities and to see the weather forecast for the next 5 days.',
      image: './images/Weathy-screen.png',
      link: 'https://weathy.netlify.app/',
      github: ''
    },
    {
      title: 'my auto',
      description: 'Weathy is a weather app that allows you to check the weather in your city and in the cities of your choice. It also allows you to save your favorite cities and to see the weather forecast for the next 5 days.',
      image: 'https://i.ibb.co/0nZ3Z3T/weathy.png',
      link: 'https://weathy.netlify.app/',
      github: ''
    },
  ]

  return (
    <div className="container">
      <div id="introduction" className="introduction__display">
        <div className='introduction__text-typing'>
          <div className='introduction__typed-out'>
            Hi,<span className='secondary-color-text'> Ophelie</span> here.
          </div>
        </div>
        <span className='introduction__random-text'>I enjoy creating things.</span>
        <p>I am a full stack developer based in Ile-de-France.
          <br />
          I have a passion for designing and developing web and game applications.
        </p>
        <div className='introduction__mail-display'><a href="mailto: opheliediomar@outlook.fr" ><FontAwesomeIcon icon={faEnvelope} />Say hi!</a></div>
      </div>
      <div id="about" className="about__display">
        <span className='tertiary-color-text'>/ about me</span>
        <p className="display-p">As a highly motivated and skilled <span className='secondary-color-text'> software engineer</span>, I have a strong background in front-end and back-end development
          , as well as a passion for creating dynamic, user-friendly web solutions. I recently completed an
          apprenticeship at <span className='secondary-color-text'>Ubisoft</span>, where I had the
          opportunity to work on various projects and collaborate with a team of experienced developers.
          I'm a <span className='secondary-color-text'> quick learner</span>, <span className='secondary-color-text'>a team player</span>, and I always strive to create elegant, efficient
          and robust code. I'm eager to bring my skills and experience to a new challenge and am
          excited to continue developing my skills in a dynamic and fast-paced work environment.
          <br />
          <br />
          Here are some of the programming languages that I have worked with:
          <div className='about__language-display'>
            <span><FontAwesomeIcon icon={faCaretRight} />React.js</span>
            <span><FontAwesomeIcon icon={faCaretRight} />HTML & CSS</span>
            <span><FontAwesomeIcon icon={faCaretRight} />Node.js</span>
            <span><FontAwesomeIcon icon={faCaretRight} />Typescript</span>
            <span><FontAwesomeIcon icon={faCaretRight} />PHP</span>
            <span><FontAwesomeIcon icon={faCaretRight} />Symfony</span>
          </div>
        </p>
      </div>
      <div id="experience" className="experience__display">
        <span className='tertiary-color-text'>/ experience</span>
        <div className='block-experience__job'>
          <div className='experience__job'>
            <span>Front-end Developer Assistant @ <span className='secondary-color-text'>Ubisoft</span></span>
            <span>NOV 2021 - NOV 2022</span>
          </div>
          <div className='experience__job-items'>
            <div className='experience__job-accomplishment'>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Architected a front-end service to allow users to retrieve prices for a specific product, according to the multiple options chosen and export the receipt.</p>
            </div>
            <div className='experience__job-accomplishment'>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Identified and implemented dynamic web solutions in accordance to company standards and best practices and learn 4 new technologies.</p>
            </div>
            <div className='experience__job-accomplishment'>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Collaborated with product team members for the publication of +40 blog’s articles.</p>
            </div>
            <div className='experience__job-accomplishment'>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Participated in code review with 2 senior developers and team lead to gained feedback and experience in writing custom, scalable code.</p>
            </div>
            <div className='experience__job-accomplishment'>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Developed 5 new user-facing features.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="software" className="software__display">
        <span className='tertiary-color-text'>/ software-creations</span>
        <div className='software__display-projects block-experience__job'>
          {data.map((project) => (
            <div key={project.title} className='software__display-project'>
              <div className='software__display-project-margin'>
                <div className='software__display-project-nav'>
                  <FontAwesomeIcon icon={faFolder} />
                  <div className='software__display-project-links'>
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
                <div className='software__display-project-info'>
                  <span className='software__project-title'>{project.title}</span>
                  <p className='software__project-description'>{project.description}</p>
                  <span className='software__project-techno'></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer__display">
        <div className='footer__display-links'>
          <a href="https://www.linkedin.com/in/ophelie-diomar-2b1b1b1b1/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
