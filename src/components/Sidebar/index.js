import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import TempLogo from '../../assets/images/bitcoin.svg'
import LogoSub from '../../assets/images/my-logo.png'
import Home from '../../assets/images/house-chimney.svg'
import User from '../../assets/images/user.svg'
import Envelope from '../../assets/images/envelope.svg'
import Linkedin from '../../assets/images/linkedin.svg'
import GitHub from '../../assets/images/github.svg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= { TempLogo } alt='logo' class= 'filter-blue' />
            <img src= { LogoSub } alt= 'sub-logo' className='sub-logo' class= 'filter-gray' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <img src= { Home } alt='logo' className='nav' class='filter-gray' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                <img src= { User } alt='logo' className='nav' class='filter-gray' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <img src= { Envelope } alt='logo' className='nav' class='filter-gray' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target= '_blank' rel= 'noreferrer' href='https://www.linkedin.com/in/rodney-bejabeng/'>
                    <img src= { Linkedin } alt= 'linkedin-logo' class= 'filter-gray' />
                </a>
            </li>
            <li>
                <a target= '_blank' rel= 'noreferrer' href='https://github.com/rodneybejabeng'>
                    <img src= { GitHub } alt= 'github-logo' class= 'filter-gray' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar