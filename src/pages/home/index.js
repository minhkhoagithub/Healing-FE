
import { Link } from 'react-router-dom';
import './style_home.scss';
import logotext from '../../assets/images/text-logo_web_wehealing_services.png'
import logo from '../../assets/images/logo_web_wehealing_services.png'
import back from '../../assets/images/bs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <>
            <div className="home-container">
                <div className="header">
                    <ul className='header-nav'>
                        <li><Link to='/' className='nav-link'>Trang chủ</Link></li>
                        <li><Link to='/chan-doan' className='nav-link'>Blog</Link></li>
                        <li><Link to='/news' className='nav-link'>Tin tức</Link></li>
                        <li><Link to='/contact' className='nav-link'>Liên hệ</Link></li>
                    </ul>
                    <div className='user'>
                    <button className='btn-user'>
                                <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span>
                            </button>
                            <div className='btn-login'>
                                <a href='#'>Đăng nhập</a>
                            </div>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                </div>
                <div className="home-content">
                    <div className='left'>
                        <div className='block_text_logo'>
                            <div className='img'><img src={logotext} alt='forestbridge' /></div>
                        </div>
                        <div className='block_btn'>
                            <button className='btn-start'>Chẩn đoán ngay</button>
                        </div>
                        <div className='block_search'>
                        <span className='icon_search'><FontAwesomeIcon icon={faSearch} /></span>
                            <input type='text' placeholder='' />
                        </div>
                    </div>
                    <div className='right'>
                    <div className='img'><img src={back} alt='forestbridge' /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;