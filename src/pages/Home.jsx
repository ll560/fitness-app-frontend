import background from '../assets/lunges.jpeg'

const Home = () =>{
    return(
    <div>
        <div className='row'>
        <img src={background} style={{margin: "20px", width: "50rem"}}></img>
        <div className='col'>
            <p className="h1"> Log Workouts</p>
            <p className="h2"> Add Images</p>
            <p className="h3"> Less Stress</p>
            <p className="h4"> Progress </p>
            <p className="h5"> Move</p>
            <p className="h5"> Fun</p>
        </div>
    </div>
    </div>
    )
}

export default Home;