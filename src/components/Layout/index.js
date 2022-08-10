import {Outlet} from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar'

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'></span>
            <Outlet />
            <span className='tags bottom-tags'>
            Welcome
            <br />
            <span className='bottom-tag-html'>To Bejabeng.com!</span>
            </span>

        </div>
    </div>
    
    )
}

export default Layout