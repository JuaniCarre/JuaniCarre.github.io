import './Footer.css'
import linkedin from '../../images/linkedin.png'
import gmail from '../../images/gmail.png'
import github from "../../images/github.png"

function Footer(){


  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Correo electrónico copiado al portapapeles.');
  };

  const handleGmailClick = () => {
    const email = 'juanicarrenio@gmail.com';
    copyToClipboard(email);
  };

  return(
    <footer>
      <h3 className="footerText">Contact:</h3>
      <div className='LinksContainer'>
        <a href='https://www.linkedin.com/in/juani-carre/'><img src={linkedin} alt="Linkedin" className="FooterImage"/></a>
        <img src={gmail} alt="Mail" className="FooterImage" onClick={handleGmailClick}/>
        <a href="https://github.com/JuaniCarre"><img src={github} alt="GitHub" className="FooterImage"/></a>
      </div>
    </footer>
  )
}

export default Footer