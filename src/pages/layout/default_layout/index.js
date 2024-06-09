import Header from "../../../components/Header";




function DefaultLayout({children}) {
    const bac = {
        height: "100vh", // Đặt chiều cao là 100%
        backgroundColor: "#F2F2F2" // Đặt màu nền là màu xám nhạt
    };

    return ( 
        <div style={bac}>
            <Header/>
            <div className="content_layout">
                {children}
            </div>
        </div> 
    );
}

export default DefaultLayout;