import "./Home.css";

const Home = () =>{
    return(
    <>
        <a name="home"></a>
        <div className="homeContainer">
            <div className='downloadCV'>
                <a href="./src/assets/LuisRamirezCV.pdf" download="Luis Ramirez CV">Download CV</a>
            </div>
            <div className="typeWriter ">
                <h1 className="t-shadow t-stroke">HEY, <br></br> 
                I'M LUIS RAMIREZ</h1>
                <p className="homeAnimation">A focused Web Developer building the backend and the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
        </div>
    </>)
}

export default Home;