import Symptomatic_time from '../components_diagnose/symptomatic_time.js'
import Symptomatic_nature from '../components_diagnose/symptomatic_nature.js'
import '../ui_full_symptom-details/time_nature_style.scss'

function Time_Nature() {
    return (
        <div className="container_Time_Nature">

            <div className='container-box'>
                    <div className='box-time'>
                        <Symptomatic_time />
                    </div>
                <div className='box'>
                    <Symptomatic_nature />
                </div>
            </div>
        </div>
    );
}

export default Time_Nature;