import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class HomeHeader extends Component {
    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div></div>
                    </div>
                    <div className='center-content'>
                        <ul className='header-nav'>
                            <li><a href='#'>Trang chủ</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Tin tức</a></li>
                            <li><a href='#'>Liên hệ</a></li>
                        </ul>
                    </div>
                    <div className='right-content'>
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
}

export default HomeHeader;