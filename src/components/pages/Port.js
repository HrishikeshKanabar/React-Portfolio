import {faCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

const Port = () => (
  <div class="col-12 col-s-9">
  <div id="portfolio" class="portflio-section">
  <h2>PORTFOLIO</h2>
  <br/><br/><br/><br/>
  <div class="flex-container">
    <a class="flex-item one" href="https://hrishikeshkanabar.github.io/run-buddy/">
      <span> RUN BUDDY <br /><br />
      <a href="https://github.com/HrishikeshKanabar/run-buddy.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a class="flex-item two" href="https://desolate-hollows-73074.herokuapp.com/">
      <span> GO GAMES GO <br /><br />
      <a href="https://github.com/HrishikeshKanabar/GoGamesGo.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a class="flex-item three" href="https://maplesyrupman.github.io/say-word/">
      <span> SAY WORD <br /><br />
      <a href="https://github.com/maplesyrupman/say-word.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
  </div>
  </div>
  </div>

  
  );
  
  export default Port;