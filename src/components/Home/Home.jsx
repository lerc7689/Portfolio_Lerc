import "./Home.css";
import homeImgContainer from "../../assets/img/homeImg.png"

const Home = () =>{
    return(
    <>
        <a name="home"></a>
        <div className="homeContainer" id="home">
            <div className='downloadCV'>
                <a href="./src/assets/LuisRamirezCV.pdf" download="Luis Ramirez CV">Download CV <br/><br/><i className="fa-solid fa-angles-down"></i></a>
            </div>


            <div className="typeWriter ">
            <div className='homeImgContainer'>
                <img src={homeImgContainer} alt="" />
            </div>
                <h1>HEY, <span>I'M LUIS RAMIREZ</span></h1>
                <p className="homeAnimation">A focused Web Developer building the backend and the Frontend of 
                                            Websites and Web Applications that leads to the success of the 
                                            overall product.</p>
            </div>
        </div>
    </>)
}

export default Home;