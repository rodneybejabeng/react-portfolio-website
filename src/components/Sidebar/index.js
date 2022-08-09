import { Link } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/logo-r.png'
import Home from '../../assets/images/house-chimney.svg'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= { LogoR } alt='logo' />
            <img src= { Home } alt='logo' />
        </Link>
    </div>
)

export default Sidebar