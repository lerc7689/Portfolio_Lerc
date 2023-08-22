import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false)
    // const sunIcon = document.getElementById('sun')
    // const moonIcon = document.getElementById('moon')

    const darkMode = () =>{
        document.body.classList.toggle("darkMode");
        setIsDarkMode(!isDarkMode)
        /*
        console.log(sunIcon)
        sunIcon?.classList.add('prueba')
        // console.log(sunIcon.classList.contains("[fa-sun]"))
        if(isDarkMode){
            // console.log(moonIcon.classList.contains('fa-moon'))
            // if(moonIcon.classList.contains('prueba')){

            //     moonIcon.classList.remove('prueba')
            // }
            // sunIcon.classList.add('prueba')
        }else{
            console.log("FALSE")
            // if(sunIcon.classList.contains('prueba')){

            //     sunIcon.classList.remove('prueba')
            // }
            // moonIcon.classList.add('prueba')
        }
        */
    }

    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var i = document.getElementsByTagName("a");
        var barOptions = document.getElementsByClassName("visually");
        var headerList = this.document.getElementById('headerList')
        var scrollPosition = window.scrollY;
        var threshold = window.innerHeight; // 100vh

        if (scrollPosition >= threshold) {
          header.classList.add("ShortHeaderContainer");
          headerList.classList.add("shortHeaderList");


           for (let index = 0; index < i.length; index++) {
                barOptions[index]?.classList.add('hidden')
           }

        } else {
          header.classList.remove("ShortHeaderContainer");
          headerList.classList.remove("shortHeaderList");

            for (let index = 0; index < i.length; index++) {
                i[index].style.color="white";
                barOptions[index]?.classList.remove('hidden')
            }
        }
     ///
        const sections = document.querySelectorAll('.homeContainer, .aboutMeContainer, .skillsGLobalContainer, .portfolio, .contactMeContainer');
        const navLinks = document.querySelectorAll('.headerOption');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    entry.target.classList.add('show')
                    const targetId = entry.target.getAttribute('id');
                    console.log(targetId)

                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${targetId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }

                    });

                }else{
                    entry.target.classList.remove('show')
                }
            });
        }, {threshold: 0.3});

        sections.forEach(section => {
        observer.observe(section);
        });
        ///
    });
/*
        useEffect(() => {
          // Función para realizar un desplazamiento automático al cargar la pantalla
          function scrollToTop() {
            window.scrollTo({
              top: 1, // Desplazarse al inicio de la página
              behavior: 'smooth' // Animación suave
            });
          }
      
          // Realizar el desplazamiento automático al cargar la pantalla
          scrollToTop();
      
        }, []);*/
    return(
    <>
        <div id="header" className="headerContainer">
            <ul className="headerList" id='headerList'>
                <a href="#home" className="headerOption">
                    <li><i className="fa-solid fa-house-user"></i> <span id="span" className="visually">Home</span></li>
                </a>
                <a href="#aboutMe" className="headerOption">
                    <li><i className="fa-solid fa-address-card"></i> <span id="span" className="visually">About me</span></li>
                </a>
                <a href="#skills" className="headerOption">
                    <li><i className="fa-solid fa-code"></i> <span  id="span"  className="visually">Skills</span></li>
                </a>
                <a href="#portfolio" className="headerOption">
                    <li><i className="fa-solid fa-briefcase"></i>  <span id="span" className="visually">Portfolio</span></li>
                </a>
                <a href="#contactMe" className="headerOption">
                    <li><i className="fa-solid fa-mobile-screen"></i>  <span id="span" className="visually">Contact me</span></li>
                </a>
                <div className="headerOption">
                    {isDarkMode === true ?
                        <>
                            <li><i className="fa-solid fa-sun" id="sun" onClick={darkMode}></i></li>
                        </>
                    :
                        <>
                            <li><i className="fa-solid fa-moon" id="moon" onClick={darkMode}></i></li>
                        </>

                    }
                </div>
            </ul>

        </div>
    </>)
}

export default NavBar;