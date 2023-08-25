import './FirstPage.css'
import css from '../images/CSS3.png'

function FirstPage() {
  return (
    <div className="FirstPageContainer">
    <div className="App">
        <h1 className='name'>
          Juan Ignacio Carreño
        </h1>
        <h3 className="title">Backend developer
        </h3>
        <h2 className="quote">Soy yo contra mi mismo<br/> Y no pienso perder. <br/>Ahreeee que tiraba el pokemon<br/><br/><br/> De Argentina, Buenos Aires
        </h2>
    </div>
    <img src={css} className="MyPicture" alt="Mi Foto"></img>
    </div>
  );
}

export default FirstPage;
