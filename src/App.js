import { useState } from 'react';

// import logo from './logo.svg';f
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { act } from 'react-dom/test-utils';





function App() {

  // const activePage = (activePage) {
  //   ()
  // }


  const [activePage, setActivePage] = useState('Home');

  
  
  return (
    <div className="App">
      <Navbar passHandleClick={setActivePage} />
      <div className="content">
       { (activePage == 'Home') && <Home /> }
       { (activePage == 'Projects') && <Projects /> }
       { (activePage == 'Resume') && <Resume /> }
       { (activePage == 'Contact') && <Contact />}
       <p> Bruh</p>
      </div>
    </div> 
  );
}

export default App;