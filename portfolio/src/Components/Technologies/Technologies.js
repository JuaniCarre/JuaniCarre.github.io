import './Technologies.css'
import css from '../../images/CSS3.png'
import html from '../../images/HTML.png'
import js from '../../images/JS.png'
import mysql from '../../images/Mysql.png'
import node from '../../images/NODE.png'
import postgres from '../../images/postgres.png'
import react from '../../images/react.png'
import redux from '../../images/redux.png'
import sequelize from '../../images/sequelize.png'
import mongo from '../../images/mongo.png'
import postman from '../../images/postman.png'


function Technologies(){
    return(
    <div className='skillscontainer'>
    <h2 className="SkillsTitle"  id="skills">Skills</h2>
    <div className='tec4'>
        <div className='skill'>
            <img src={node} alt="Node.JS" className='SkillImg'></img>
            <p className="skillName">Node.JS</p>
        </div>
        <div className='skill'>
            <img src={js} alt="JavaScript" className='SkillImg'></img>
            <p className="skillName">JavaScript</p>
        </div>
        <div className='skill'>
            <img src={html} alt="HTML" className='SkillImg'></img>
            <p className="skillName">HTML</p>
        </div>
        <div className='skill'>
            <img src={mysql} alt="MySQL" className='SkillImg'></img>
            <p className="skillName">MySQL</p>
        </div>
    </div>
    <div className='tec4'>
        <div className='skill'>
            <img src={postgres} alt="Postgres" className='SkillImg'></img>
            <p className="skillName">Postgres</p>
        </div>
        <div className='skill'>
            <img src={react} alt="React" className='SkillImg'></img>
            <p className="skillName">React</p>
        </div>
        <div className='skill'>
            <img src={redux} alt="CSS" className='SkillImg'></img>
            <p className="skillName">Redux</p>
        </div>
        <div className='skill'>
            <img src={sequelize} alt="CSS" className='SkillImg'></img>
            <p className="skillName">Sequelize</p>
        </div>
    </div>
    <div className='tec3'>
    <div className='skill'>
            <img src={mongo} alt="MongoDb" className='SkillImg'></img>
            <p className="skillName">MongoDb</p>
        </div>
        <div className='skill'>
            <img src={postman} alt="Postman" className='SkillImg'></img>
            <p className="skillName">Postman</p>
        </div>
        <div className='skill'>
            <img src={css} alt="CSS" className='SkillImg'></img>
            <p className="skillName">CSS</p>
        </div>
        
    </div>
    </div>
    )
}

export default Technologies;