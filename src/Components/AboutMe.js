import './AboutMe.css'
import { useTranslation } from 'react-i18next'

function AboutMe(){
  const [t] = useTranslation("global")
  return(
    <div className="AboutMe" id="aboutMe">
      <h2 id="aboutMe" className='titleAbout'>{t("AboutMe.TitleAbout")}</h2>
      <p className="textAboutMe">{t("AboutMe.TextAbout1")}<br/><br/>{t("AboutMe.TextAbout2")}<br/><br/>
        {t("AboutMe.TextAbout3")}<br/><br/>{t("AboutMe.TextAbout4")}<br/><br/>{t("AboutMe.TextAbout5")}
      </p>
    </div>
  )
}
export default AboutMe