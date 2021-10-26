import { useState } from 'react';
import CV from './CV';



const Home = () => {
    
    const [activePage, setActivePage] = useState('Home');

    const handleClick = () => {
        setActivePage('Projects');
    }

    const[jobs, setJobs] = useState([
        {title: 'Ass Cleaner', description: 'I clean asses for money', id: 1},
        {title: 'Cock Boi MC Fuckface', description: 'The name says it all', id: 2}
    ]);

    return ( 
        <div className="home">
            <h1>{ activePage }</h1>
            <button onClick={handleClick}>Click Me</button>
            
            <p className='description'>
            Curabitur felis nunc, elementum in erat vel, maximus aliquam magna. Nam eget dapibus purus, quis tempor nisl. Vivamus aliquet cursus ex, eget convallis tortor vestibulum vel. Nullam quis magna sodales, aliquet est egestas, ullamcorper justo. Quisque mauris mi, tincidunt quis elit quis, placerat ultricies magna. Fusce volutpat malesuada orci ut laoreet. Pellentesque iaculis enim sed magna venenatis.
            </p>

            <CV jobs={jobs}/>
        

            {/* <div className="mainImage">

            </div> */}
        </div>
     );
}
 
export default Home;