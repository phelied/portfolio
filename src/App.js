import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

function App() {

  return (
    <div className="container">
      <div id="introduction" className="introduction__display">
        <div className='introduction__text-typing'>
          <div className='introduction__typed-out'>
            Hi,<span className='secondary-color-text'> ophelie</span> here.
          </div>
        </div>
        <span className='introduction__random-text'>I enjoy creating things.</span>
        <p>I am a full stack developer based in Ile-de-France.
          <br />
          I have a passion for designing and developing web and game applications. I am always looking to learn and explore new technologies, and am excited to continue growing my skills in a dynamic and fast-paced environment.
        </p>
        <div className='introduction__mail-display'><a href="mailto: opheliediomar@outlook.fr" ><FontAwesomeIcon icon={faEnvelope} />Say hi!</a></div>
      </div>
      <div id="about" className="about__display">
        <span className='tertiary-color-text'>/ about me</span>
        <p className="display-p">As a highly motivated and skilled <span className='secondary-color-text'> software engineer</span>, I have a strong background in front-end and back-end development
          , as well as a passion for creating dynamic, user-friendly web solutions. I recently completed an
          apprenticeship at <span className='secondary-color-text'>Ubisoft</span>, where I had the
          opportunity to work on various projects and collaborate with a team of experienced developers.
          I'm a <span className='alt-color'> quick learner</span>, <span className='alt-color'>a team player</span>, and I always strive to create elegant, efficient
          and robust code. I'm eager to bring my skills and experience to a new challenge and am
          excited to continue developing my skills in a dynamic and fast-paced work environment.
          <br />
          <br />
          Voici quelque uns des languages de programmation avec lesquelles j'ai travaillée:
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
        <AwesomeSlider animation="cubeAnimation">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </AwesomeSlider>
      </div>
    </div>
  );
}

export default App;
