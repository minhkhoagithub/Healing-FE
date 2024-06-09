import'./style_chandoan.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Bill from '../../components/extra/bill';
import Info from '../../components/info/info.js';
import { Link } from 'react-router-dom';
function ChanDoan() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        phone: ''
      });

      const handelOnClick    = (e) => {
        if(formData.name === '' || formData.date === '' || formData.phone === ''){
            e.preventDefault();
            alert('Vui lòng nhập đầy đủ thông tin');
            return false;
        }
        return true;
      }
    
       const handelData = (e) => {
        setFormData(e);
       };
       console.log(formData);
    return ( 
        <div className='wrapper'>
            <div className='loading'></div>
            <div className='content-chandoan'>
                <div className='section-left'>
                    <Info onChangeData={handelData}/>
                 </div>       
                <div className='section-rigth'>
                    <div className='block-top'>
                        <button className='btn'>
                            <Link to='/trieu-chung' className='link' onClick={handelOnClick}> Tiếp tục <div className='icon-right'><FontAwesomeIcon icon={faCaretRight} /></div></Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default ChanDoan;