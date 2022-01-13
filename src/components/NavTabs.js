import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['AboutMe', 'Porfolio', 'Resume', 'Contact'];

  return (
    <header className="NavTabs">
    <h2 ><FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;
        Hrishikesh Kanabar
     </h2>
      <div>
    <Navbar>
    <ul className="nav nav-tabs">
    
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </Navbar>
    </div>
   
    </header >
  );
}

export default NavTabs;