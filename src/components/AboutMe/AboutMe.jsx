import "./AboutMe.css";
import aboutMeImg from "../../assets/img/imgAboutMe.jpg"

const AboutMe = () =>{

    window.addEventListener('scroll', function() {
        var imgContainer = document.querySelector(".imgContainer");
        var AboutMeInfoContainer = document.querySelector(".AboutMeInfoContainer");
        var scrollPosition = window.scrollY;
        var threshold = window.innerHeight * 2; // 100vh
        console.log(threshold)
        if (scrollPosition = threshold) {
            
            imgContainer.classList.add('visible_imgContainer');
            AboutMeInfoContainer.classList.add('visible_AboutMeInfoContainer');
        } 
    });

    return(
    <>
            <a name="aboutMe"></a>
            <section className="aboutMeContainer" id="imgContainer">
                <div className="imgContainer">
                    <img src={aboutMeImg} alt="" />
                </div>
                <div className="AboutMeInfoContainer">
                    <p className="aboutMeMessage">
                        My name is Luis Eduardo Ramirez C. I am passionate about code, 
                        I think that not everyone has the happiness of working on what 
                        they like, so I feel lucky, I like the challenges that programming 
                        offers and knowing that every day I will learn something new.
                    </p>

                <ul className="aboutMeList">
                    <li>
                    {/* <!-- location --> */}
                    <span class="about-info-logo"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></span>
                    <span><b>Location:</b>Santo Domingo, Republica Dominicana</span>
                    </li>
                    {/* <!-- interests --> */}
                    <li>
                    <span class="about-info-logo"><i class="fas fa-gamepad" aria-hidden="true"></i></span>
                    <span><b>Interests:</b>Motocross, Excercise, Nature</span>
                    </li>
                    {/* <!-- study --> */}
                    <li>
                    <span class="about-info-logo"><i class="fas fa-school" aria-hidden="true"></i></span>
                    <span><b>Study:</b>Academlo</span>
                    </li>
                    {/* <!-- degree --> */}
                    <li>
                    <span class="about-info-logo"><i class="fas fa-graduation-cap" aria-hidden="true"></i></span>
                    <span><b>Degree:</b>systems and computer engineer</span>
                    </li>
                    {/* <!-- mail --> */}
                    <li>
                    <span class="about-info-logo"><i class="fas fa-envelope" aria-hidden="true"></i></span>
                    <span><b>Mail:</b>lerc7689@hotmail.com </span>
                    </li>
                    {/* <!-- phone --> */}
                    <li>
                    <span class="about-info-logo"><i class="fas fa-phone-alt" aria-hidden="true"></i></span>
                    <span><b>Phone:</b>829-721-3784</span>
                    </li>
                </ul>
                </div>
            </section>

    </>)
}

export default AboutMe;