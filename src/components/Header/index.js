import {Link} from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch  } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo_full_web_wehealing_services.png'

function Header() {
    return (
        <div className="container">
            <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='logo'>
                            <img src={logo} alt="Description of the image"/>
                        </div>
                    </div>
                    <div className='center-content'>
                        <ul className='header-nav'>
                            <li><Link to='/'>Trang chủ</Link></li>
                            <li><Link to='/chan-doan'>Blog</Link></li>
                            <li><Link to='/news'>Tin tức</Link></li>
                            <li><Link to='/contact'>Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <div className='search-box'>
                            <div className='wrapper'>
                            <span className='icon_search'><FontAwesomeIcon icon={faSearch} /></span>
                            <input type='text' placeholder=''  className='search'/>
                            </div>
                        </div>
                    <div className='btn-content'>
                            <button className='btn-user'>
                                <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span>
                            </button>
                            <div className='btn-login'>
                                <a href='#'>Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    );
}

export default Header;