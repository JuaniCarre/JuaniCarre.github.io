import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'
import spanish from '../images/spanish.png'
import english from '../images/english.png'

function Header(){

  const [t, i18n] = useTranslation("global")

  function toAbout(){
    const About = document.getElementById("aboutMe")
    About.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  function toSkills(){
    const Skills = document.getElementById("skills")
    Skills.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  function toProjects(){
    const Projects = document.getElementById("projects")
    Projects.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  function toContact(){
    const Contact = document.getElementById("contact")
    Contact.scrollIntoView({ block: "start", behavior: "smooth" })
  }



  return(
    <header id="navBar">
    <div className="navContainer">
    <ul className='items'>
      <a href='https://drive.google.com/drive/folders/1WuP7f1CY7OA5xPQ-w4ZdJ_G2MPTLnaIq?usp=sharing'><li className='listItem'>{t("header.CV")}</li></a>
      <li className='listItem' onClick={e=>toAbout()}>{t("header.AboutMe")}</li>
      <li className='listItem' onClick={e=>toSkills()}>{t("header.Skills")}</li>
      <li className='listItem' onClick={e=>toProjects()}>{t("header.Projects")}</li>
      <li className='listItem' onClick={e=>toContact()}>{t("header.Contact")}</li>
    </ul>
    <div className='language'>
      <button onClick={()=>{i18n.changeLanguage("es")}} className='languageButton'>
        <img className='languageButtonImg' src={spanish}/>
      </button>
      <button onClick={()=>{i18n.changeLanguage("en")}} className='languageButton'>
        <img className='languageButtonImg' src={english}/>
      </button>
    </div>
    </div>
    </header>
  )
}

export default Header