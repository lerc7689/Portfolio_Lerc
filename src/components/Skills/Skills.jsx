import "./Skills.css";
import htmlImg from "../../assets/img/html.png"
import cssImg from "../../assets/img/css.png"
import jsImg from "../../assets/img/java.png"
import reactImg from "../../assets/img/react.png"
import reactRouterImg from "../../assets/img/router.png"
import reactReduxImg from "../../assets/img/redux.png"
import gitImg from "../../assets/img/git.png"
import nodeJsImg from "../../assets/img/node.png"
import expressJsImg from "../../assets/img/express-js.png"
import postgresJsImg from "../../assets/img/postgresql.png"

const Skills = () =>{
    return(
    <>
      <a name="skills"></a>
        <section className="skillsGLobalContainer">
          <h2 className="skillsTitle">My Skills</h2>
          <div className="skillsContainer">
            <div className="ImgContainer"><p className="textBehind">Html</p><img  src={htmlImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Css</p><img src={cssImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Js</p><img src={jsImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">React</p><img src={reactImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Router</p><img src={reactRouterImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Redux</p><img src={reactReduxImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Git</p><img src={gitImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">NodeJs</p><img src={nodeJsImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Express</p><img src={expressJsImg} alt="" /></div>
            <div className="ImgContainer"><p className="textBehind">Postgres</p><img src={postgresJsImg} alt="" /></div>
          </div>
        </section>
    </>)
}

export default Skills;