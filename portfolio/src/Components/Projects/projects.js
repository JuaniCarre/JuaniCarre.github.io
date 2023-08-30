import css from '../../images/CSS3.png'
import './projects.css'
import { useTranslation } from 'react-i18next'


function Projects(){

  const [t] = useTranslation("global")
  return(
    <div className="ProjectsContainer">
      <h2 className="ProjectTag" id="projects">{t("Projects.Projects")}</h2>
      <div className="ProjectContainer">
        <img src={css} alt="Imagen o video del proyecto" className="ProjectImage"></img>
        <div className="ProjectText">
          <h3 className="ProjectTitle">{t("Projects.title1")}</h3>
          <h5 className="ProjectRole">{t("Projects.role1")}</h5>
          <p className="ProjectDescription">{t("Projects.description1")}</p>
          <ul className='ProjectLinks'>
            <li>{t("Projects.repo")}</li>
            <li>{t("Projects.deploy")}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects