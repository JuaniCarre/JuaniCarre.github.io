import './projects.css'
import { useTranslation } from 'react-i18next'
import autoBid from '../../images/AutoBid.png'
import luxury from '../../images/luxury.png'
import pokemon from '../../images/PokePedia.png'

function Projects(){

  const [t] = useTranslation("global")
  return(
    <div className="ProjectsContainer" id="projects">
      <h2 className="ProjectTag">{t("Projects.Projects")}</h2>

      <div className="ProjectContainer">
          <div className='ProjectDivider'>
            <img src={autoBid} alt="Imagen o video del proyecto" className="ProjectImage"></img>
            <div className="ProjectText">
              <h3 className="ProjectTitle">{t("Projects.Project1.title")}</h3>
              <h5 className="ProjectRole">{t("Projects.Project1.role")}</h5>
              <p className="ProjectDescription">{t("Projects.Project1.description")}</p>
            </div>
          </div>
          <ul className='ProjectLinks'>
            <button className='ProjectButton'>
              <a rel="noreferrer" className='ProjectLink' target='_blank' href='https://github.com/matumoralli/AutoBid-API'><li>{t("Projects.Project1.repo")}</li></a>
            </button>
            <button className='ProjectButton'>
              <a rel="noreferrer" className='ProjectLink' href='https://autobidmarket.com/' target='_blank'><li>{t("Projects.Project1.deploy")}</li></a>
            </button>
          </ul>
      </div>

      <div className="ProjectContainer">
        <div className='ProjectDivider'>
          <img src={luxury} alt="Imagen o video del proyecto" className="ProjectImage"></img>
          <div className="ProjectText">
            <h3 className="ProjectTitle">{t("Projects.Project2.title")}</h3>
            <h5 className="ProjectRole">{t("Projects.Project2.role")}</h5>
            <p className="ProjectDescription">{t("Projects.Project2.description")}</p>
          </div>
        </div>
        <ul className='ProjectLinks'>
          <button className='ProjectButton'>
            <a rel="noreferrer" className='ProjectLink' target='_blank' href='https://github.com/Santiago-Miranda/HENRY-LUXURY'><li>{t("Projects.Project1.repo")}</li></a>
          </button>
          <button className='ProjectButton'>
            <li className='ProjectLink' onClick={()=> {alert("This project is not deployed. you can check the repository!")}}>{t("Projects.Project1.deploy")}</li>
          </button>
        </ul>
      </div>

      <div className="ProjectContainer">
        <div className='ProjectDivider'>
          <img src={pokemon} alt="Imagen o video del proyecto" className="ProjectImage"></img>
          <div className="ProjectText">
            <h3 className="ProjectTitle">{t("Projects.Project3.title")}</h3>
            <h5 className="ProjectRole">{t("Projects.Project3.role")}</h5>
          <p className="ProjectDescription">{t("Projects.Project3.description")}</p>
          </div>
        </div>
          <ul className='ProjectLinks'>
            <button className='ProjectButton'>
              <a rel="noreferrer" className='ProjectLink' target='_blank' href='https://github.com/JuaniCarre/PI-pokemon'><li>{t("Projects.Project1.repo")}</li></a>
            </button>
            <button className='ProjectButton'>
              <li className='ProjectLink' onClick={()=> {alert("This project is not deployed. you can check the repository!")}}>{t("Projects.Project1.deploy")}</li>
            </button>
          </ul>
      </div>
    </div> 
  )
}

export default Projects