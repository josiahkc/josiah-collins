import Home from './Home';
import CV from './CV';
import Projects from './Projects';
import Contact from './Contact';

const Navbar = ({passHandleClick}) => {

    console.log("!", passHandleClick)

    const saumSmells = () => {
        console.log('She smelly');
    }

    return ( 
        <nav className="navbar">
            <h1>Josiah's Blog</h1>
            <div className="links">
                <button className="link" onClick={() => passHandleClick(Home)}>Home</button>
                <button className="link" onClick={() => passHandleClick(Projects)}>Projects</button>
                <button className="link" onClick={() => passHandleClick(CV)}>Resume</button>
                <button className="link" onClick={() => passHandleClick(Contact)}>Contact</button>
            </div>
        </nav>
     );
}
 
export default Navbar;