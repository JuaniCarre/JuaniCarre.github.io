import './FirstPage.css'
import css from '../images/CSS3.png'
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
        <h2 className="quote">{t("FirstPage.q1")}<br/>{t("FirstPage.q2")}<br/>{t("FirstPage.q3")}<br/><br/><br/> {t("FirstPage.location")}
        </h2>
    </div>
    <img src={css} className="MyPicture" alt="Mi Foto"></img>
    </div>
  );
}

export default FirstPage;
