import "./SkillsModal.css";

const SkillsModal = ({setIsVisible, isVisible, modalTitle, icon, description}) =>{
    console.log(modalTitle)
    
    return(
    <>
        <div className="skillsDefinitionModal">
            <div onClick={()=> setIsVisible(!isVisible)} className="closeModal">x</div>
            
            <i className="fa-brands fa-html5"></i>
            <h2>{modalTitle}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis placeat, corporis 
                dolores nam magni optio vero dolor explicabo eum, maxime consectetur aut quidem quas 
                adipisci ab exercitationem enim id dolore!
            </p>
        </div>

    </>)
}

export default SkillsModal;