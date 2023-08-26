import "./Portfolio.css";
import WeatherAppImg from "../../assets/img/imgProjects/WeatherApp.png"
import UserApi from "../../assets/img/imgProjects/UserApi.png"
import RickAndMortyApp  from "../../assets/img/imgProjects/Rick&MortyApp.png"
import PokemonApp  from "../../assets/img/imgProjects/PokemonApp.png"
import ECommerce from "../../assets/img/imgProjects/E-Commerce-React.png"  
// import { useEffect } from "react";
import { useRef } from "react";

const Portfolio = () =>{
    const scrollReference = useRef(null);
    
    const leftHandle = () =>{
        if(scrollReference.current)
        console.log(scrollReference.current.scrollLeft)
        scrollReference.current.scrollLeft -= 400; // Ajusta la cantidad de desplazamiento aquí
    }

    const rightHandle = () =>{
        if(scrollReference.current)
        console.log(scrollReference.current.scrollLeft)
        scrollReference.current.scrollLeft += 400; // Ajusta la cantidad de desplazamiento aquí
    }

    return(
    <>
      <a name="portfolio"></a>
      <section className='portfolio' id="portfolio">
        <h2 className='portfolioTitle'>Projects</h2>

        <button className="backBtn" onClick={leftHandle}><i className="fa-solid fa-angle-left"></i></button>
        <button className="nextBtn"onClick={rightHandle}><i className="fa-solid fa-chevron-right"></i></button>

        <div ref={scrollReference} className='portfolioGeneralImgesContainer'>
            <div className="portfolioSingleImgContainer">
                <img src={WeatherAppImg} alt="WeatherAppImg img" /> 
                    <div className="portfolioSingleImgText">
                        <a href="https://github.com/lerc7689/WeatherAPP">
                            <p>
                                <i className="fa-brands fa-github"></i>
                            </p>
                        </a>   
                        <a href="https://weather-app-lerc.netlify.app/">
                            <p>
                                Demo
                            </p>
                        </a>
                    </div>
            </div>
            <div className="portfolioSingleImgContainer">
                <img src={UserApi} alt="UserApi img" />
                <div className="portfolioSingleImgText">
                        <a href="https://github.com/lerc7689/user_API_Lerc">
                            <p>
                                <i className="fa-brands fa-github"></i>
                            </p>
                        </a>   
                        <a href="https://user-crud-app-lerc.netlify.app">
                            <p>
                                Demo
                            </p>
                        </a>
                </div>
            </div>
            <div className="portfolioSingleImgContainer">
                <img src={RickAndMortyApp} alt="RickAndMortyApp img" />
                <div className="portfolioSingleImgText">
                        <a href="https://github.com/lerc7689/Rick_and_Morty">
                            <p>
                                <i className="fa-brands fa-github"></i>
                            </p>
                        </a>   
                        <a href="https://rick-and-morty-app-lerc.netlify.app/">
                            <p>
                                Demo
                            </p>
                        </a>
                </div>
            </div>
            <div className="portfolioSingleImgContainer">
                <img src={PokemonApp} alt="PokemonApp img" />
                <div className="portfolioSingleImgText">
                        <a href="https://github.com/lerc7689/Poke_API">
                            <p>
                                <i className="fa-brands fa-github"></i>
                            </p>
                        </a>   
                        <a href="https://pokemon-app-lerc.netlify.app/pokedex">
                            <p>
                                Demo
                            </p>
                        </a>
                </div>
            </div>
            <div className="portfolioSingleImgContainer">
                <img src={ECommerce} alt="E-Commerce Img" />
                <div className="portfolioSingleImgText">
                        <a href="https://github.com/lerc7689/E-Commerce_React">
                            <p>
                                <i className="fa-brands fa-github"></i>
                            </p>
                        </a>   
                        <a href="https://e-commerce-react-app-lerc.netlify.app/">
                            <p>
                                Demo
                            </p>
                        </a>
                </div>
            </div>
        </div>
      </section>
    </>)
}

export default Portfolio;