import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Section extends Component {
    render() {
        
        return (
            <div className="section-container">

                <div className="section-content">
                    <div className="content-title">
                        <h1>we healing</h1>
                    </div>
                    <div className="content-subtitles">
                        <h3>Nền tảng chẩn đoán bệnh thông minh</h3>
                    </div>
                    <div className="content-btn">
                        <button className="btn-diagnosis" >Chẩn đoán</button>
                        <button className="btn-search">Tra cứu trạm y tế</button>
                    </div>
                    <div className="search-info">
                        <span><FontAwesomeIcon icon={faUser} />Tìm thông tin</span>
                        <input type="text" placeholder="" />
                    </div>
                </div>
            </div>
        );
    }
}

class Section2 extends Component {
    render() {
        return (
            <div className="slider-container">
                <div className="layer-background">
                    <div className="slider-content">
                        <div className="content-title">
                            <span>
                                Thông tin cá nhân
                            </span>
                        </div>
                        <div className="content-form">
                            <table>
                                <tr>
                                    <td>
                                        <dl>
                                            <dd className="input-text">
                                                <input type="text" name="hoten" placeholder="Họ và tên"></input>
                                            </dd>
                                            <dt>
                                                <label>Ví dụ: Nguyễn Văn A</label>
                                            </dt>
                                        </dl>
                                    </td>
                                    <td>
                                        <dl>
                                            <dd className="input-text">
                                                <select title="Giới tính">
                                                    <option value="">Giới tính</option>
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                            </dd>
                                            <dt>
                                                <label>Nam/Nữ</label>
                                            </dt>
                                        </dl>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <dl>
                                            <dd className="input-text">
                                                <input type="text" name="birthday" placeholder="Ngày tháng năm sinh"></input>
                                            </dd>
                                            <dt>
                                                <label>Ví dụ: 01/01/2000</label>
                                            </dt>
                                        </dl>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <dd className="input-text">
                                            <input type="text" name="phone" placeholder="Số điện thoại"></input>
                                        </dd>
                                        <dt>
                                            <label>Ví dụ: 032677xxxxxx</label>
                                        </dt>
                                    </td>
                                    <td>
                                        <dl>
                                            <dd>
                                                <button className="btn-continue">Tiếp tục</button>
                                            </dd>
                                            <dt>
                                            </dt>
                                        </dl>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showSecondTextarea: false 
        };
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            showTextarea: !prevState.showTextarea 
          }));
    }

    render() {
        return (
            <div className="slider-container">
                <div className="layer-background">
                    <div className="slider-content_symptoms">
                        <div className="left-content">
                            <div className="content-title">
                                <h1>
                                    Nhập triệu chứng
                                </h1>
                            </div>
                            <div className="text-input">
                                <textarea placeholder="Ví dụ: đau nữa đầu,..." className={this.state.showTextarea ? 'textarea small' : 'textarea'}></textarea>
                            </div>
                            <div className="btn-more_symptoms">
                                <span>Thêm triệu chứng</span>
                                <button onClick={this.handleButtonClick}>{this.state.showTextarea ? <FontAwesomeIcon icon={faMinus} />:<FontAwesomeIcon icon={faPlus} />}</button>
                            </div>
                            {this.state.showTextarea && <textarea placeholder="Nhập văn bản" className="new_textarea"></textarea>}
                        </div>
                        <div className="right-content">
                            <div className="content-title">
                                <h1>
                                    Các triệu chứng liên quan
                                </h1>
                            </div>
                            <div className="content-symptoms">
                                <input className="symptoms" pattern="" placeholder="vd: đau đầu kinh niên"></input>
                            </div>
                            <div className="content-symptoms">
                                <input className="symptoms" pattern="" placeholder="vd: đau đầu do thời tiết"></input>
                            </div>
                            <div className="content-symptoms">
                                <input className="symptoms" pattern="" placeholder="vd: đau đầu ác tính"></input>
                            </div>
                            <div className="content-symptoms">
                                <input className="symptoms" pattern="" placeholder="vd: đau đầu bình thường"></input>
                            </div>
                            <div className="content-symptoms">
                                <input className="symptoms" pattern="" placeholder="vd: đau đầu bình thường"></input>
                            </div>

                            <div className="btn-diagnosis">
                                <button>Chẩn đoán ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Section4 extends Component{
    render(){
        return(
            <div className="slider-container">
                <div className="layer-background">
                    <div className="content">
                        <div className="content-title">
                            <h1>Chẩn đoán</h1>
                        </div>
                        <div className="output_text">
                            <textarea readOnly onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} placeholder=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default { Section, Section2, Section3, Section4 };