import '../info/info_style.scss';
import React, { useState , useRef } from 'react';

function Info({onChangeData}) {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        phone: ''
      });


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        sendDataToParent();
      };

      const checkName = (e) => {
        const nameRegex = /^[a-zA-Z\s]*$/;
        let name = e.target.value;
        if(!nameRegex.test(name)){
            alert('Tên chỉ chứa chữ cái và không chứa ký tự đặc biệt');
            
        }
      };

      const checkPhone = (e) => {
        const phoneRegex = /^(0|\+84|84)[0-9]{9}$/;
        let phone = e.target.value;
        console.log(phone);
        if(!phoneRegex.test(phone)){
            alert('SDT gồm 10 số và bắt đầu bằng số 0');
        }
      };
      const date = useRef(null);
      const checkDate = (e) => {
        const selectedDate = new Date(e.target.value); 
        const currentDate = new Date();
        if (selectedDate >= currentDate) {
            date.current.focus();
            date.current.value = '';
            alert('Ngày sinh phải nhỏ hơn ngày hiện tại');
           
        }
        
      };

      const sendDataToParent = () => {
        onChangeData(formData); // Gọi hàm callback và truyền dữ liệu lên
      };


    return ( 
        <div className="box-info">
            <div className="title_info">
                <span>Thông tin cá nhân</span>
            </div>
            <div className="box-content">
                <div className="label-content">Họ và Tên</div>
                <input type="text" name='name' placeholder="Họ và tên" 
                value={formData.name} onChange={handleInputChange} onBlur={checkName} />
                <div className="label-content">Ngày tháng năm sinh</div>
                <input type="date" name='date' placeholder="dd/mm/YYYY" 
                value={formData.date} onChange={handleInputChange}  onBlur={checkDate} ref={date}/>
                <div className="label-content">Số điện thoại</div>
                <input type="text" name='phone' placeholder="0328462264" 
                value={formData.phone} onChange={handleInputChange} onBlur={checkPhone}/>
                <div className="label-content">Bệnh nền (Nếu có) </div>
                <input type="text" placeholder="" />
            </div>
        </div>
     );
}

export default Info;
