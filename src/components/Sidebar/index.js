import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import TempLogo from '../../assets/images/bitcoin.svg'
import LogoSub from '../../assets/images/my-logo.png'
import Home from '../../assets/images/house-chimney.svg'
import User from '../../assets/images/user.svg'
import Envelope from '../../assets/images/envelope.svg'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= { TempLogo } alt='logo' class= 'filter-blue' />
            <img src= { LogoSub } alt= 'sub-logo' className='sub-logo' class= 'filter-gray' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <img src= { Home } alt='logo' class='filter-gray' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                <img src= { User } alt='logo' class='filter-gray' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <img src= { Envelope } alt='logo' class='filter-gray' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar