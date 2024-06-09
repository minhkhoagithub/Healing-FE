import Symptomatic_time from'../components_diagnose/symptomatic_time.js'
import Symptomatic_nature from'../components_diagnose/symptomatic_nature.js'
import '../ui_full_symptom-details/full_style.scss';

function Full_Symptom() {
    return ( 
        <div className="container_full_symptom">
            <div className='box-time'>
                    <Symptomatic_time />
                </div>
                <div className='container-box'>
                <div className='box'>
                    <Symptomatic_nature />
                </div>
                <div className='box'>
                    <Symptomatic_nature />
                </div>
                </div>
        </div>
     );
}

export default Full_Symptom;