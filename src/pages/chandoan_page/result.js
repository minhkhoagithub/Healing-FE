import React from 'react';
import '../chandoan_page/result_style.scss';
function Result() {
    return (
        <div className="container_result">
            <div className="title_result">
                <h1>Kết quả chẩn đoán sơ bộ</h1>
                <p>Đây là chẩn đoán sơ bộ trong quy trình khám bệnh, Kết quả chẩn đoán trang web không mang tính chất kết luận cuối cùng</p>
            </div>
            <div className="content_result">
                <div className="box_content">
                    <div className="info_user">
                        <div className='title_info'>
                            Thông tin người được chẩn đoán
                        </div>
                        <div className='info_user_content'>
                            <p className='label_info'>Họ và Tên</p>
                            <div className='value_info'></div>
                            <p className='label_info'>Giới tính</p>
                            <div className='value_info'></div>
                            <p className='label_info'>Ngày tháng năm sinh</p>
                            <div className='value_info'></div>
                            <p className='label_info'>Bệnh nền</p>
                            <div className='value_info'></div>
                        </div>
                    </div>
                </div>
                <div className="box_content">
                    <div className="info_result">
                        <div className='initial_result'>
                            <h2>Kết quả chẩn đoán sơ bộ</h2>
                            <div className='result'></div>
                            <div className='time'></div>
                        </div>
                        <div className='symptoms'>
                            <div className='title'>
                                Các triệu chứng
                            </div>
                            <div className='list_item'>
                                {/* <div className='items'>1</div>
                                <div className='items'>2</div>
                                <div className='items'>3</div>
                                <div className='items'>3</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="box_content">
                    <div className="chart_reusult">
                        <div className='chart_item'>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Result;