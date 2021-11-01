import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { useState } from 'react';

const Navbar = ({passHandleClick}) => {


    console.log("!", passHandleClick)

    return ( 
        <nav className="navbar">
            <h1>Josiah's Blog</h1>
            <div className="links">
                <button className="link" onClick={() => passHandleClick('Home')}>Home</button>
                <button className="link" onClick={() => passHandleClick('Projects')}>Projects</button>
                <button className="link" onClick={() => passHandleClick('Resume')}>Resume</button>
                <button className="link" onClick={() => passHandleClick('Contact')}>Contact</button>
            </div>
        </nav>
     );
}
 
export default Navbar;