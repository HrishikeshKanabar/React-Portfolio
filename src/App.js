import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import NavTabs from './components/NavTabs';
import Port from './components/pages/Port';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Footer from './components/pages/Footer';



function App() {

  
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('AboutMe');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Porfolio':
         return <Port />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="cont">
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <br/><br/>
      <center>
      <Footer></Footer>
      </center>
      <br/><br/>
    </div>
    
  );
}

export default App;
