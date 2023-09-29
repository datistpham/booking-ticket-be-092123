import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import { t } from "react-i18next"


const SelectType = (props) => {
  return (
    <div className="sk-2">
        <div className="ds-4">
            <Link to="/booking?q=flight" style={{textDecoration: "none"}}>
                <S setbookplane={()=> props.setbookplane(()=> true)} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcProductDuotoneFlightFill"><path d="M8.79289 4.20711L7 6L9 8L10.7929 6.20711C11.1834 5.81658 11.1834 5.18342 10.7929 4.79289L10.2071 4.20711C9.81658 3.81658 9.18342 3.81658 8.79289 4.20711Z" fill="#FFFFFF"></path><path d="M17.7929 13.2071L16 15L18 17L19.7929 15.2071C20.1834 14.8166 20.1834 14.1834 19.7929 13.7929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071Z" fill="#FFFFFF"></path><path d="M14 7L2.82279 3.27426C2.35068 3.11689 1.83469 3.33062 1.61213 3.77573L1.39479 4.21042C1.16925 4.6615 1.3149 5.20993 1.73452 5.48968L10 11L13 14L18.5103 22.2655C18.7901 22.6851 19.3385 22.8307 19.7896 22.6052L20.2243 22.3879C20.6694 22.1653 20.8831 21.6493 20.7257 21.1772L17 10L14 7Z" fill="#FFFFFF"></path><path d="M3.53173 14.6915L6 15L9 18L9.30853 20.4683C9.42133 21.3707 8.91113 22.2355 8.06676 22.5733L7.85432 22.6583C7.37143 22.8514 6.82109 22.6422 6.5885 22.177L5 19L1.82299 17.4115C1.35781 17.1789 1.14857 16.6286 1.34173 16.1457L1.4267 15.9332C1.76445 15.0889 2.62934 14.5787 3.53173 14.6915Z" fill="#FFFFFF"></path><path d="M5.68328 19.6584L9 18L13.4396 14.3003C14.4779 13.4351 15.4378 12.4801 16.3083 11.4463L21.8613 4.85219C22.5053 4.08741 22.457 2.95698 21.75 2.25C21.043 1.54302 19.9126 1.49466 19.1478 2.13868L12.5537 7.69166C11.5199 8.56219 10.5649 9.52214 9.69969 10.5604L6 15L4.34164 18.3167C3.91186 19.1763 4.82373 20.0881 5.68328 19.6584Z" fill="#FFFFFF"></path></svg>} title="Vé máy bay" />
            </Link>
            <Link to="/booking?q=hotel" style={{textDecoration: "none"}}>
                <S setbookplane={()=> props.setbookplane(()=> false)} icon={<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"><path fillRule="evenodd" d="M7 2.18a1 1 0 0 1 .164.014l10 1.667a1 1 0 0 1 .836.986V11L21 11a1 1 0 0 1 1 1v10h-8v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H6V3.18a1 1 0 0 1 1-1zM5 10v12H2V11a1 1 0 0 1 1-1h2zm16 7h-3v1h3v-1zm0-3h-3v1h3v-1zm-9.5-4H9v2.5h1.01V11h1.49v-1zm4 0H13v2.5h1.01V11h1.49v-1zm-4-4H9v2.5h1.01V7h1.49V6zm4 0H13v2.5h1.01V7h1.49V6z"></path></svg>} title="Phòng khách sạn" /> 
            </Link>
            {/* <Link to="/booking?q=combo" style={{textDecoration: "none"}}>
                <S setbookplane={()=> props.setbookplane(()=> undefined)} icon={<svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"><path fillRule="evenodd" d="M10 13v9.023H2V14a1 1 0 0 1 1-1h7zm11.5-3a.5.5 0 0 1 .5.5V22H11V10.5a.5.5 0 0 1 .5-.5h10zM8 18H4v1h4v-1zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8 15H4v.954h4V15zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8.127 1.301a2 2 0 0 1 1.61.106l4.94 2.576 3.726-1.357a1.19 1.19 0 1 1 .814 2.236L8.473 8.772a2 2 0 0 1-2.25-.635L4 5.337l.485-.177a2 2 0 0 1 1.868.267l1.442 1.06L10.95 5.34 7.085 1.681z"></path></svg>} title="Máy bay + khách sạn" /> 
            </Link> */}
        </div>
    </div>
  )
}
const S= (props)=> {
    return (
        <div className="df-3" onClick={props.setbookplane}>
             <S1 icon={props.icon} title={props.title} />
             <S2 icon={props.icon} title={props.title} />
        </div>
    )
}
const S1= (props)=> {
    // const { t }= useTranslation()

    return (
        <div className="ic-1">
            {props.icon}
        </div>
    )
}
const S2= (props)=> {
    const { t }= useTranslation()

    return (
        <div className="te-1">
            {t(props.title)}
        </div>
    )
}

export default SelectType