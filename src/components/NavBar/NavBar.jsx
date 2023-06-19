import "./NavBar.css";

const NavBar = () =>{
    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var i = document.getElementsByTagName("a");
        var scrollPosition = window.scrollY;
        var threshold = window.innerHeight; // 100vh
        
        if (scrollPosition >= threshold) {
          header.style.backgroundColor = 'white'; // Cambiar a nuevo color

           for (let index = 0; index < i.length; index++) {
                i[index].style.color="black";
           }

        } else {
          header.style.backgroundColor = 'rgba(0, 255, 255, 0.404)'; // Mantener color inicial
            for (let index = 0; index < i.length; index++) {
                i[index].style.color="white";
            }
        }
    });
    return(
    <> 
        <div id="header" className="headerContainer">
            <ul className="headerList">
                <a href="#home" className="headerOption">
                    <li><i class="fa-solid fa-house-user"></i> Home</li>
                </a>
                <a href="#aboutMe" className="headerOption">
                    <li><i class="fa-solid fa-address-card"></i> About me</li>
                </a>
                <a href="#skills" className="headerOption">
                    <li><i class="fa-solid fa-code"></i> Skills</li>
                </a>
                <a href="#portfolio" className="headerOption">
                    <li><i class="fa-solid fa-briefcase"></i> Portfolio</li>
                </a>
                <a href="#contactMe" className="headerOption">
                    <li><i class="fa-solid fa-mobile-screen"></i> Contact me</li>
                </a>
            </ul>
            
        </div>
    </>)
}

export default NavBar;