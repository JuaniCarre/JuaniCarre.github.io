import './AboutMe.css'
import { useTranslation } from 'react-i18next'

function AboutMe(){
  const [t] = useTranslation("global")
  return(
    <div className="AboutMe" id="aboutMe">
      <h2 id="aboutMe" className='titleAbout'>{t("AboutMe.TitleAbout")}</h2>
      <p className="textAboutMe">{t("AboutMe.TextAbout1")}<br/>{t("AboutMe.TextAbout2")}<br/>
        {t("AboutMe.TextAbout3")}
      </p>
    </div>
  )
}
export default AboutMe