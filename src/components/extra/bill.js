import '../extra/bill_style.scss'
function Bill() {
    return (
        <div className='box-bill-extra'>
            <div className='box-bill'>
                <div className='bill'>
                    <div className='header-bill'>
                        <div className='card'>
                            <div className='plus'>
                                <div className="horizontal-line"></div>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                        <div className='list-line'>
                            <div className='line'>
                            </div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>
                    </div>

                    <div className='content-bill'>
                        <div className='list-lines'>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                            <div className='lines'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;