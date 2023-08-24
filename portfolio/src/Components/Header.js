import './Header.css'

function Header(){
  return(
    <header>
    <div className="navContainer">
    <ul className='items'>
      <li className='listItem'>Projects</li>
      <li className='listItem'>About me</li>
      <li className='listItem'>Education</li>
      <li className='listItem'>Experience</li>
    </ul>
    </div>
    </header>
  )
}

export default Header