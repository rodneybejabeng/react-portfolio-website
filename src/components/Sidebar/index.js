import { Link } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/logo-r.png'
import LogoRsubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div>
        <Link>
            <img src= {LogoR} alt='logo' />
            <img src= {LogoRsubtitle} alt='logo' />
        </Link>
    </div>
)

export default Sidebar;