import "./Footer.css";

const Footer = () =>{
    return(
    <>
        <div className="FooterContainer">
            <div>
                <h2>Lerc</h2>
                <p>Copyright 2023. All Rights Reserved</p>
            </div>
            
            <div className="socialMediaContainer">
                <h3>Social Media</h3>
                <div className="socialMediaIconsContainer"> 
                    <a href="https://www.instagram.com/lerc7689/?next=%2F">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100082497974182">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://wa.me/8297213784">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>  
                    <a href="https://www.linkedin.com/in/luis-ramirez-4a8b5a279/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;