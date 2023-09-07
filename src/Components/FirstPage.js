import './FirstPage.css'
import css from '../images/micara.jpg'
import { useTranslation } from 'react-i18next'

function FirstPage() {
  const [t] = useTranslation("global")
  return (
    <div className="FirstPageContainer">
    <div className="App">
        <h1 className='name'>
          Juan Ignacio Carreño
        </h1>
        <h3 className="title">{t("FirstPage.Title")}
        </h3>
        <img src={css} className="MyPictureResponsive" alt="Mi Foto"></img>
        <h2 className="quote">{t("FirstPage.q1")}<br/>{t("FirstPage.q2")}<br/>{t("FirstPage.q3")}<br/><br/><br/> {t("FirstPage.location")}
        </h2>
    </div>
    <img src={css} className="MyPicture" alt="Mi Foto"></img>
    </div>
  );
}
//De argentina buenos airs misma font q el name
export default FirstPage;
