import { useState } from 'react';

// import logo from './logo.svg';f
import Navbar from './Navbar';
import Home from './Home';
import CV from './CV';
import Projects from './Projects';
import Contact from './Contact';





function App() {

  const [activePage, setActivePage] = useState(Home);

  // const handleClick = (newPage) => {
  //   console.log("handle click ran");
  //   switch (newPage) {
  //     case 'Home':
  //       setActivePage(Home);
  //       break;
  //     case 'Projects':
  //       setActivePage(Projects);
  //       break;
  //     case 'Resume':
  //       setActivePage(CV);
  //       break;
  //     case 'Contact':
  //       setActivePage(Contact);
  //       break;
    
  //     default:
  //       break;
  //   }

  // }
  
  return (
    <div className="App">
      <Navbar passHandleClick={setActivePage} />
      <div className="content">
        { activePage }
      </div>
    </div> 
  );
}

export default App;
