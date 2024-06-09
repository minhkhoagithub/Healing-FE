
import './style_symptoms.scss';
import { useState } from 'react';

import Full_Symptom from '../../components/ui_full_symptom-details/full.js';
import Time_Nature from '../../components/ui_full_symptom-details/time_nature.js';

import { Link } from 'react-router-dom';


function Symptoms() {
    const [input_search, set_input_search] = useState("");
    const [symptoms_result, set_symptoms_result] = useState([]);
    const [word, set_word] = useState([]);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            set_word(prev => [...prev, input_search])
            set_input_search(''); 
        }
    };

    const handleaddtag = (user)=>{
        set_word(prev => [...prev, user.title])

    }

    const fetchSymptoms = (value) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json =>{
            const result = json.filter((user) => {
                return value && user && user.title && user.title.toLowerCase().includes(value);
            });  
            set_symptoms_result(result); 
        });
    }

    const handleSearchSymptoms = (value) => {
        set_input_search(value)
        fetchSymptoms(value)
    };


    const handleItemClick = (user) => {
        set_input_search(user.title);
        handleaddtag(user);
    };

    function handleSubmit(event) {
        event.preventDefault(); 
      }
    return (
        <div className="container-symptoms">
            <div className="content-symptoms-left">
                <h1>Nhập triệu chứng</h1>
                <div className="box-symptoms-result">
                    {word.map((item, index) => (
                        <div className="tag-symptoms" key={index}>
                            <span>{item}</span>
                            <button onClick={() => set_word(word.filter((_, i) => i !== index))}>X</button>
                        </div>
                    ))}
                </div>
                <form className="form-input-symptoms" onSubmit={handleSubmit}>
                    <div className="box-symptoms-input-search">
                        <input type="text" placeholder="" id='symptoms-input' 
                        value={input_search} 
                        onChange={(e) => handleSearchSymptoms(e.target.value)} 
                        onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div className="box-list">
                        <ul className="list-symptoms">
                        {symptoms_result.map((user) => (
                            <li key={user.id} onClick={() => handleItemClick(user)}>
                                {user.title}
                            </li>
                        ))}
                    </ul>
                        </div>
                </form>
                <div className='box-btn'>
                    {
                       symptoms_result && symptoms_result.length > 0 && (
                        <button className='btn'>
                            <Link to="/ket-qua" className='link'><p>Chẩn đoán</p> <span>&gt;</span></Link>
                        </button>
                    )
                    }
                </div>
            </div>
            <div className="content-symptoms-right">
            
            </div>
        </div>
    );
}

export default Symptoms;