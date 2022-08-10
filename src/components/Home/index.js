import './index.scss';
import MyLogo from '../../assets/images/my-logo.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone '>
                <h1>Hi,<br/> I'm 
                <img src= {MyLogo} alt= 'developer'/>
                <br/>
                student
                </h1>
                <h2>

                </h2>
                <Link to='/contact' className= 'flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;