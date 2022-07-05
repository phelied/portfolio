import './App.css';
import Links from './components/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <div className="introduction__display">
        <div className='introduction__text-typing'>
          Hi,<span className='secondary-color-text'>ophelie</span> here.
        </div>
        <span className='introduction__random-text'>Je crée des choses parfois.</span>
        <p>Je suis une front-end developer residant en Ile-de-France.
          <br />
          Je m'intéresse au désign, devéloppement web, developpent game et tout ce qu'il y aux milieux.
        </p>
        <div className='introduction__mail-display'><FontAwesomeIcon icon={faEnvelope} />Say hi!</div>
      </div>
      <div className="about__display">
        <span className='tertiary-color-text'>/ about me</span>
        <p>Je suis actuellement en 2ème année à la <span className='secondary-color-text'>Web@cadémie by Epitech</span> en alternance.
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
      <div className="experience__display">
        <span className='tertiary-color-text'>/ experience</span>
        <p>Je suis actuellement en 2ème année à la <span className='secondary-color-text'>Web@cadémie by Epitech</span> en alternance.
        </p>
      </div>
    </div>
  );
}

export default App;
