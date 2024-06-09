import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <h3>we healing</h3>
                    </div>
                    <div className="footer-content-right">
                        <div className="footer-content-right-top">
                            <ul>
                                <li>
                                    <a href="#">Chính sách</a>
                                </li>
                                <li>
                                    <a href="#">Quyền riêng tư</a>
                                </li>
                                <li>
                                    <a href="#">Điều khoản</a>
                                </li>
                                <li>
                                    <a href="#">Giới thiệu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;