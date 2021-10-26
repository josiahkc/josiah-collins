import { useState } from 'react';
import CV from './CV';



const Home = () => {
    

    const[jobs, setJobs] = useState([
        {title: 'Job 1', description: 'Job desctription', id: 1},
        {title: 'CBMFF', description: 'bruh', id: 2}
    ]);

    

    return ( 
        <div className="home">
            <h1>{ activePage }</h1>
            <button onClick={handleClick}>Click Me</button>
            
            
        </div>
     );
}
 
export default Home;