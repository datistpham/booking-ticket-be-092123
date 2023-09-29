import React, { useEffect } from 'react'
import picture_home from "../../assets/picture_home.jpg"
// import picture2_home from "../../assets/41a0f77ef670196cfdc7548505e437f1_50523 (2).png"
import AOS from "aos"
import { useState } from 'react'
AOS.init({
    duration: 1000
})

const HomePage = (props) => {
  const [toggle, settoggle]= useState(false)
  useEffect(()=> {
    let a= setInterval(()=> settoggle(prev=> !prev), 2000)
    return ()=> {
        clearInterval(a)
    }
  }, [])
  return (
    <div style={{width: "100%"}}>
        <div className="home-main-page" style={{position: "relative",width:"100%", height: "calc(100vh - 60px)", backgroundImage: `url(${picture_home})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center", overflow: "hidden", display: toggle=== true ? "block" : "none", transition: "all .2s linear"}}>
        </div>
        <div className="home-main-page" style={{position: "relative",width:"100%", height: "calc(100vh - 60px)", backgroundImage: `url(https://c8.alamy.com/comp/2CAE1N5/online-booking-banner-mobile-application-for-book-hotel-accommodation-or-apartment-for-vacation-vector-landing-page-of-online-rent-reservation-with-isometric-smartphone-and-house-2CAE1N5.jpg)`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center", overflow: "hidden", display: toggle=== true ? "none" : "block", transition: "all .2s linear"}}>
        </div>
        <br />
        <div style={{fontSize: 32, fontWeight: 600, textAlign: "center"}}>Chúng tôi tự hào vì</div>
        <br />
        <div className="home-good-new" style={{width: "100%", height: "auto", padding: 20, display: "flex", justifyContent: 'center',alignItems: 'center', flexDirection: 'column', boxSizing: "border-box"}}>
            <div className="stand-out-archieve" style={{ width: "100%",height: "50vh", maxWidth: 1024, display: "flex", justifyContent: 'center',alignItems: 'center',gap: 20, flexDirection: "column"}}>
                <div data-aos="flip-left" className="c-stand-out" style={{flex: "1 1 0", width: "100%", boxSizing: "border-box", borderRadius: "10px", border: "1px solid #e7e7e7", padding: 20, borderBottom: "5px solid #5392f9", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{fontSize: 20, fontWeight: 600, color: "#737373", marginBottom: 16, textAlign: "center"}}>2930342 + Chuyến bay thành công</div>
                </div>
                <div data-aos="flip-up" className="c-stand-out" style={{flex: "1 1 0", width: "100%", boxSizing: "border-box", borderRadius: "10px", border: "1px solid #e7e7e7", padding: 20, borderBottom: "5px solid #5392f9", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{fontSize: 20, fontWeight: 600, color: "#737373", marginBottom: 16, textAlign: "center"}}>1003211 + Khách sạn đặt thành công</div>
                </div>
                <div data-aos="flip-right" className="c-stand-out" style={{flex: "1 1 0", width: "100%", boxSizing: "border-box", borderRadius: "10px", border: "1px solid #e7e7e7", padding: 20, borderBottom: "5px solid #5392f9", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{fontSize: 20, fontWeight: 600, color: "#737373", marginBottom: 16, textAlign: "center"}}>874515 + Combo được đặt thành công</div>
                </div>
            </div>
            <br />
            <br />
            <div style={{fontSize: 32, fontWeight: 600}}>Tiếng lành đồn xa</div>
            <br />
            <div style={{width: "100%", maxWidth: 1024, display: "flex", justifyContent: 'center',alignItems: 'center', flexDirection: 'row', boxSizing: "border-box", gap: 20}}>
                <Co aos="fade-up" text1={"Fairmont Singapore"} text2={"ở Singapore"} text3={"Khách sạn này chỉ đơn giản là quá tuyệt vời, không thể không cám ơn Hiragana đã giúp tôi chọn lựa khách sạn tốt. Tôi là khách hàng thường xuyên của Hiragana và phải công nhận là Hiragana là ứng dụng yêu thích của tôi!"} text4={"- Malvin đến từ Singapore"}></Co>
                <Co aos="zoom-in" text1={"Khách sạn Heritage"} text2={"ở Philippines"} text3={"Tôi săn được giá đặc biệt giờ chót với Hiragana. Phòng ốc rộng rãi, giường ngủ thoải mái và ấm cúng."} text4={"- Henry đến từ Úc"}></Co>
                <Co aos="fade-down" text1={"Nhà nghỉ Klausturhof"} text2={"ở Iceland"} text3={"Tôi hoàn toàn hài lòng khi nghỉ tại Klausturhof. Cám ơn Hiragana rất nhiều."} text4={"- Vishwas đến từ Ấn Độ"}></Co>
            </div>
            <br />
            <br />
            <Footer></Footer>
        </div>
    </div>
  )
}
const Co= (props)=> {
    return (
        <div data-aos={props.aos} className={"cp-1"} style={{flex: "1 1 0", height: "70vh", boxSizing: "border-box", borderRadius: "10px", border: "1px solid #e7e7e7", padding: 20, borderBottom: "5px solid #5392f9", backgroundColor: "#fff"}}>
            <div style={{fontSize: 24, fontWeight: 600, color: "#5392f9", textAlign: "center"}}>{props.text1}</div>
            <div style={{fontSize: 20, fontWeight: 600, color: "#737373", marginBottom: 16, textAlign: "center"}}>{props.text2}</div>
            <div style={{fontSize: 22, fontWeight: 600, textAlign: "center"}}>{props.text3}</div>
            <div style={{fontSize: 24, textAlign: "center", marginTop: 16}}>{props.text4}</div>
        </div>
    )
}
const Footer= (props)=> {
    const ar1= ["Trung tâm trợ giúp", "Câu hỏi thường gặp", "Chính sách bảo mật", "Chính sách về cookie", "Điều khoản sử dụng"]
    const ar2= ["PointsMAX", "Tuyển dụng", "Báo chí", "Nhật ký mạng"]
    const ar3= ["Quốc gia", "Thành phố"]
    const ar4= ["Đối tác trên hiragana", "Đối tác liên kết", "Đối tác kết nối"]
    return (
        <div style={{width: "100%", display: "flex", justifyContent: 'space-evenly', backgroundColor: "rgb(233, 235, 238)", boxSizing: "border-box", padding: "20px 20px", height: "40vh"}}>
            <ComponentFooter title="Trợ giúp" array={ar1} ></ComponentFooter>
            <ComponentFooter title="Về chúng tôi" array={ar2} ></ComponentFooter>
            <ComponentFooter title="Điểm du lịch" array={ar3} ></ComponentFooter>
            <ComponentFooter title="Đối tác của chúng tôi" array={ar4} ></ComponentFooter>
        </div>
    )
}
const ComponentFooter= (props)=> {
    return (
        <div style={{flex: "1 1 0"}}>
            <div style={{fontSize: 16, color: "#737373", fontWeight: 600, margin: "16px 0"}}>
                {props.title}
            </div>  
            {
                props.array?.map((item, key)=> <SubComponentFooter text={item} key={key}></SubComponentFooter>)
            }
        </div>
    )
}
const SubComponentFooter= (props)=> {
    return (
        <div style={{fontSize: 14, color: "#737373", fontWeight: 600, margin: "16px 0", height: 20}}>
            {props.text}
        </div>
    )
}

export default HomePage