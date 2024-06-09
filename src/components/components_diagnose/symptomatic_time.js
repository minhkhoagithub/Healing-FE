import '../components_diagnose/symptomatic_time_style.scss';
function Symptomatic_Time() {
    return (
         <div className="container_Symptomatic_Time">
            <div className='tile_Symptomatic_Time'>Thời gian triệu chứng</div>
            <ul className='list_Symptomatic_Time'>
                <li><button>Sáng</button></li>
                <li><button>Trưa-Chiều</button></li>
                <li><button>Tối</button></li>
            </ul>
        </div>
    );
}

export default Symptomatic_Time;