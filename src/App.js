import './App.css';
import Links from './components/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <div className="introduction__display">
        <span className='introduction__text-typing'>Hi, <span className='introduction__name-typing'>ophelie</span> here. </span>
        <span className='introduction__random-text'>Je crée des choses parfois.</span>
        <p>Je suis une front-end developer residant en Ile-de-France.
          <br />
          Je m'intéresse au désign, devéloppement web, developpent game et tout ce qu'il y aux milieux.
        </p>
        <div className='introduction__mail-display'><FontAwesomeIcon icon={faEnvelope} />Say hi!</div>
      </div>
    </div>
  );
}

export default App;
