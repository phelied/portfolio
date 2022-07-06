import './App.css';
import FullWidthTabs from './components/experience'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

function App() {

  const software = [
    {
      'github': '',
      'link': '',
      'title': '',
      'description': '',
      'language': '',
    },
    {
      'github': '',
      'link': '',
      'title': '',
      'description': '',
      'language': '',
    },
    {
      'github': '',
      'link': '',
      'title': '',
      'description': '',
      'language': '',
    }

  ]

  return (
    <div className="container">
      <div id="introduction" className="introduction__display">
        <div className='introduction__text-typing'>
          <div className='introduction__typed-out'>
            Hi,<span className='secondary-color-text'>ophelie</span> here.
          </div>
        </div>
        <span className='introduction__random-text'>Je crée des choses parfois.</span>
        <p>Je suis une front-end developer residant en Ile-de-France.
          <br />
          Je m'intéresse au désign, devéloppement web, developpent game et tout ce qu'il y aux milieux.
        </p>
        <div className='introduction__mail-display'><a href="mailto: opheliediomar@outlook.fr" ><FontAwesomeIcon icon={faEnvelope} />Say hi!</a></div>
      </div>
      <div id="about" className="about__display">
        <span className='tertiary-color-text'>/ about me</span>
        <p className="display-p">Je suis actuellement en 2ème année à la <span className='secondary-color-text'>Web@cadémie by Epitech</span> en alternance.
          Je réalise aujourd'hui mon année d'apprentissage au sein <span className='secondary-color-text'>d'Ubisoft</span> en tant que <em>Front-end developer</em>.
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
        <FullWidthTabs />
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
