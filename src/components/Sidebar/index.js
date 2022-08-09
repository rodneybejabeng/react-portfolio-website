import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Home from '../../assets/images/house-chimney.svg'
import User from '../../assets/images/user.svg'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= { Home } alt='logo' class= 'filter-gray' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <img src= { User } alt='logo' class='filter-gray' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar