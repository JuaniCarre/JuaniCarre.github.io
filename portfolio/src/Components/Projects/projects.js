import css from '../../images/CSS3.png'
import './projects.css'


function Projects(){
  return(
    <div className="ProjectsContainer">
      <h2 className="ProjectTag" id="projects">Proyectos</h2>
      <div className="ProjectContainer">
        <img src={css} alt="Imagen o video del proyecto" className="ProjectImage"></img>
        <div className="ProjectText">
          <h3 className="ProjectTitle">Titulo del proyecto</h3>
          <h5 className="ProjectRole">que chota hice?</h5>
          <p className="ProjectDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className='ProjectLinks'>
            <li>Repo</li>
            <li>Deploy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects