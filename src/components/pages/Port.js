import {faCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

const Port = () => (
  <div className="col-12 col-s-9">
  <div id="portfolio" className="portflio-section">
  <h2>PORTFOLIO</h2>
  <br/><br/><br/><br/>
  <div className="flex-container">
    <a className="flex-item one" href="https://hrishikeshkanabar.github.io/run-buddy/">
      <span> RUN BUDDY <br /><br />
      <a href="https://github.com/HrishikeshKanabar/run-buddy.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a className="flex-item two" href="https://desolate-hollows-73074.herokuapp.com/">
      <span> GO GAMES GO <br /><br />
      <a href="https://github.com/HrishikeshKanabar/GoGamesGo.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a className="flex-item three" href="https://maplesyrupman.github.io/say-word/">
      <span> SAY WORD <br /><br />
      <a href="https://github.com/maplesyrupman/say-word.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a className="flex-item four" href="https://hrishikeshkanabar.github.io/H-Weather-Dashboard/">
      <span> Weather Dashboard <br /><br />
      <a href="https://github.com/HrishikeshKanabar/H-Weather-Dashboard.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
    <a className="flex-item five" href="https://stark-shelf-76985.herokuapp.com/">
      <span> Budget Tracker <br /><br />
      <a href="https://github.com/HrishikeshKanabar/Fin-Buget-Tracker.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
    
    </span>
    </a> 
    <a className="flex-item six" href="https://hrishi-note-taker.herokuapp.com/">
      <span> Note Taker <br /><br />
     <a href="https://github.com/HrishikeshKanabar/Express-Note-Taker.git"><FontAwesomeIcon icon={faCode} /> Source Code</a>
      
      </span>
    </a>
  </div>
  </div>
  </div>

  
  );
  
  export default Port;