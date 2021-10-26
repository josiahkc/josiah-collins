const CV = ({jobs}) => {

    return ( 
        <div className="job-list">
            {jobs.map((job) => (
                <div className="jobOutline">
                    <h2>{ job.title }</h2>
                    <p>{ job.description } </p>
                </div>
            ))}
        </div>
     );
}
 
export default CV;