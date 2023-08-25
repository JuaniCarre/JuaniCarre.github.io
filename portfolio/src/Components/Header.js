import './Header.css'

function Header(){
  return(
    <header>
    <div className="navContainer">
    <ul className='items'>
      <a href='https://drive.google.com/drive/folders/1WuP7f1CY7OA5xPQ-w4ZdJ_G2MPTLnaIq?usp=sharing'><li className='listItem'>CV</li></a>
      <li className='listItem'>About me</li>
      <li className='listItem'>Skills</li>
      <li className='listItem'>Portfolio</li>
      <li className='listItem'>Contact</li>
    </ul>
    </div>
    </header>
  )
}

export default Header