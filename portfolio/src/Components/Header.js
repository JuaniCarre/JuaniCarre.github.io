import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'
import spanish from '../images/spanish.png'
import english from '../images/english.png'

function Header(){

  const [t, i18n] = useTranslation("global")

  function toAbout(){
    const AboutSection = document.getElementById("aboutMe");
    const navbarHeight = document.getElementById("navContainer").offsetHeight
  
    const aboutSectionPosition = AboutSection.getBoundingClientRect().top + window.scrollY;
    const scrollToY = aboutSectionPosition - navbarHeight;
  
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }

  function toSkills(){
    const skillsSection = document.getElementById("skills");
    const navbarHeight = document.getElementById("navContainer").offsetHeight
  
    const skillsSectionPosition = skillsSection.getBoundingClientRect().top + window.scrollY;
    const scrollToY = skillsSectionPosition - navbarHeight;
  
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }

  function toProjects(){
    const projectSection = document.getElementById("projects");
    const navbarHeight = document.getElementById("navContainer").offsetHeight
  
    const projectSectionPosition = projectSection.getBoundingClientRect().top + window.scrollY;
    const scrollToY = projectSectionPosition - navbarHeight;
  
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }

  function toContact(){
    const contactSection = document.getElementById("contact");
    const navbarHeight = document.getElementById("navContainer").offsetHeight

    const contactSectionPosition = contactSection.getBoundingClientRect().top + window.scrollY;
    const scrollToY = contactSectionPosition - navbarHeight;
  
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  }



  return(
    <header id="navbar" className='navbar'>
    <div className="navContainer" id='navContainer'>
    <ul className='items'>
      <a href='https://drive.google.com/drive/folders/1WuP7f1CY7OA5xPQ-w4ZdJ_G2MPTLnaIq?usp=sharing' target="_blank"><li className='listItem'>{t("header.CV")}</li></a>
      <li className='listItem' onClick={e=>toAbout()}>{t("header.AboutMe")}</li>
      <li className='listItem' onClick={e=>toSkills()}>{t("header.Skills")}</li>
      <li className='listItem' onClick={e=>toProjects()}>{t("header.Projects")}</li>
      <li className='listItem' onClick={e=>toContact()}>{t("header.Contact")}</li>
    </ul>
    <div className='language'>
      <button onClick={()=>{i18n.changeLanguage("es")}} className='languageButton'>
        <img className='languageButtonImg' alt='Spanish' src={spanish}/>
      </button>
      <p className='separator'>-</p>
      <button onClick={()=>{i18n.changeLanguage("en")}} className='languageButton'>
        <img className='languageButtonImg' alt='English' src={english}/>
      </button>
    </div>
    </div>
    </header>
  )
}

export default Header