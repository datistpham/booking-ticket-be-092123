import { CircularProgress } from '@mui/material'
import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { fake_sleep } from '../../f/fake_sleep'
import useQuery from '../../f/get_query_parameter'
import { pre_booking } from '../../f/pre_booking'
import Suggest from '../../Suggest/Suggest'
import TimeConsume from '../Search/SearchFlight/ResultFIightSearch/TimeConsume'
import TimeDestination from '../Search/SearchFlight/ResultFIightSearch/TimeDestination'
import TimeOrigin from '../Search/SearchFlight/ResultFIightSearch/TimeOrigin'
import AboutFlight from './AboutFlight'
import AboutHotel from './AboutHotel'
import DetailHotel from './DetailHotel'

const PreBookingComponent = (props) => { 
  const [data, setdata]= useState()
  const location= useLocation()
  const { id }= useParams()
  const query= useQuery()   
  const [loading, setloading]= useState(()=> false)
  useEffect(()=> {
    pre_booking(query.get("id"), setdata, id)
  }, [query, id])
  //eslint-disable-next-line
  const fakeloading= async ()=> {
    setloading(()=> true)
    await fake_sleep(1500)
    setloading(()=> false)
  }
  return (
    <div className='dsodkaw-11' style={{width: "100%", display: "flex", justifyContent: "center",  flexDirection: "column", alignItems: "center", marginTop: 80, background: "#f2f3f3"}}>
        {
            id=== "flight" &&
            <>
                <AboutFlight data={data} code_origin={data?.origin} code_destination={data?.destination} />
                <div style={{width: "100%", justifyContent: 'center', maxWidth: 1024, backgroundColor: "#fff", margin: "20px 0", padding: 10,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", boxSizing: "border-box", borderRadius: 10}}>
                    <div className='ijddefeswd'>
                        <div className='jdwfdjkefgkdqlergko'>
                        <svg strokeWidth="0" width="16" height="16" viewBox="0 0 16 16" fill="#30C5F7" stroke="currentColor" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M7.97519062,3.89887963 L9.29787304,4.16341611 L12.5147829,1.36408588 C13.1061887,0.849449082 14.0084562,0.88578563 14.5615507,1.43888015 C15.115568,1.99289744 15.1490535,2.89645793 14.6363449,3.48564789 L11.8370147,6.70255777 L12.1015995,8.0254816 C12.3855429,7.83462442 12.7707202,7.86198761 13.0214373,8.11270469 C13.3049644,8.39623173 13.3072037,8.85368053 13.0166276,9.14425665 L12.4405667,9.72031757 L13.2199838,13.6174035 C13.3846893,14.4409306 12.2524962,14.840115 11.8642747,14.0953943 L9.22619986,9.03480726 L7.3146526,10.7330129 C7.17480341,10.8449531 6.97654708,10.9616287 6.7182918,11.0354403 C6.66582359,11.0504362 6.61309154,11.0627362 6.56025805,11.072242 L6.56025805,14.2731581 C6.56025805,15.0095007 5.59053285,15.278099 5.21168772,14.6466905 L3.76495746,12.2354734 L1.35374034,10.7887431 C0.722331805,10.409898 0.990930136,9.44017277 1.7272727,9.44017277 L4.92818886,9.44017277 C4.93769465,9.38733928 4.9499946,9.33460722 4.96499048,9.28213902 C5.0388021,9.02388374 5.15547775,8.8256274 5.29159003,8.65712805 L6.96538742,6.77410785 L1.90503647,4.13615614 C1.16031582,3.74793462 1.55950022,2.61574155 2.38302735,2.78044697 L6.28011324,3.55986415 L6.85617417,2.98380322 C7.14235754,2.69761985 7.60222239,2.69348977 7.88772612,2.9789935 C8.13710273,3.22837011 8.16887219,3.61229444 7.97519062,3.89887963 L7.97519062,3.89887963 Z"></path></svg>&nbsp;Hà Nội (HAN) → TP HCM (SGN)
                        </div>
                        <div style={{fontWeight: 600}} className='fllfgkdnefgkl'>
                            Sat, 28 May 2022
                        </div>
                    </div>
                    <div style={{width: 320, borderRadius: 10,}} className='bkfjbnlsglkgde'>

                    </div>
                </div>
                <div className='fejfgnekbgdf' style={{width: "100%",display: "flex" ,flexDirection: "row", justifyContent: "center", gap: 15, maxWidth: 1024}}>
                    <div className='jdofjkfaekfwef' style={{flex: "1 1 0", justifyContent: "center", alignItems: "center", maxWidth: 1024, marginTop: 10, borderRadius: 10,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: 16 , boxSizing: "border-box"}}>
                        <div className='fgdfjfjgdnjwrlgkl' >
                            <img style={{width: 28 , height: 28, objectFit: "contain"}} src={data?.logo_brand} alt="open" /> {data?.brand}
                        </div>
                        <div className='sdkakdekqwekweorwe'>
                            <TimeOrigin {...data} />
                            <TimeConsume {...data} />
                            <TimeDestination {...data} />
                        </div>
                    </div>
                    <div className='djfgjfdklergewr' style={{width: 320, height: "auto", borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", boxSizing: "border-box", padding: 10, marginTop: 10}}>
                        <div style={{fontWeight: 600, fontSize: 16, height: 46, boxSizing: "border-box", width: "100%", borderBottom: "1px solid #dadada"}}>Tóm tắt</div>
                        <br />
                        <div className='fgdfjfjgdnjwrlgkl' style={{width: "100%", alignItems: "center", justifyContent: "space-between", display: "flex", paddingBottom: 5, borderRadius: "1px solid #dadada"}}>
                            <div style={{fontSize: 14}} >
                                <img style={{width: 28 , height: 28, objectFit: "contain", marginTop: 5}} src={data?.logo_brand} alt="open" /> {data?.brand} ({parseInt(location.state.ps.split(".")[0]) > 0 && parseInt(location.state.ps.split(".")[0]) + " người lớn"} {parseInt(location.state.ps.split(".")[1]) > 0 && parseInt(location.state.ps.split(".")[1])+ " trẻ em"} {parseInt(location.state.ps.split(".")[2]) > 0 && parseInt(location.state.ps.split(".")[2]) + " em bé"})
                            </div>
                            <div>
                                VND&nbsp;
                                {(parseInt(location.state.ps.split(".")[0]) * data?.cost_adult + parseInt(location.state.ps.split(".")[1]) * data?.cost_kid + parseInt(location.state.ps.split(".")[2]) * data?.cost_baby).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </div>
                        </div>
                        <div className='fgdfjfjgdnjwsssrlgkl' style={{width: "100%", alignItems: "flex-start", justifyContent: "space-between", display: "flex", paddingBottom: 5, borderRadius: "1px solid #dadada", marginTop: 20, background: "#fff"}}>
                            <div>Giá bạn trả</div>
                            <div>
                                {data?.discount> 0 &&
                                    <>
                                        <div style={{textDecorationLine: "line-through"}}>
                                        VND&nbsp;{(parseInt(location.state.ps.split(".")[0]) * data?.cost_adult + parseInt(location.state.ps.split(".")[1]) * data?.cost_kid + parseInt(location.state.ps.split(".")[2]) * data?.cost_baby).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </div>
                                        <div>
                                        VND&nbsp;{(parseInt(location.state.ps.split(".")[0]) * data?.cost_adult + parseInt(location.state.ps.split(".")[1]) * data?.cost_kid + parseInt(location.state.ps.split(".")[2]) * data?.cost_baby - data?.discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </div>
                                    </>
                                }
                                {
                                    data?.discount<=0 &&(parseInt(location.state.ps.split(".")[0]) * data?.cost_adult + parseInt(location.state.ps.split(".")[1]) * data?.cost_kid + parseInt(location.state.ps.split(".")[2]) * data?.cost_baby).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", maxWidth: 1024, display:"flex", flexDirection: "row-reverse", marginTop: 20}}>
                    <Link to={"/booking/v2/"+ query.get("id")} style={{textDecoration: "none"}} state={{...props, ...data, ps: location.state.ps, sc: location.state.sc}}>
                        <div className='dsplplpwlpawlwpaw' style={{padding: "8px 16px", fontWeight: 600, color: "#fff", background: "#f96d01", width: 320, boxSizing: "border-box", borderRadius: 10, height: 50, display: 'flex',justifyContent: "center", alignItems: "center"}}>Tiếp tục</div>
                    </Link>
                </div>
                <Suggest flight={true} title={"Các chuyến bay được đề xuất cho bạn"} {...props} {...data} />
            </>
        }
        
        {
            id=== "hotel" &&
            <>
                <AboutHotel {...data} {...props} />
                <div style={{width: '100%', maxWidth: 1024, marginTop: 16, display: 'flex', justifyContent: "space-between", alignItems: "flex-start"}}>
                    <DetailHotel {...props} {...data} />
                    <div style={{width: 330, padding: 10, boxSizing: 'border-box', borderRadius: 6, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", background: "#fff"}}>
                        <div style={{fontSize: 16, fontWeight: 600, height: 46, boxSizing: "border-box", borderBottom: "1px solid rgb(218, 218, 218)"}}>Tóm tắt</div>
                        <div className='fgdfjfjgdnjwsssrlgkl' style={{width: "100%", alignItems: "flex-start", justifyContent: "space-between", display: "flex", paddingBottom: 5, borderRadius: "1px solid #dadada", marginTop: 20, background: "#fff"}}>
                            <div>Giá bạn trả</div>
                            <div>
                                {data?.discount> 0 &&
                                    <>
                                        <div style={{textDecorationLine: "line-through"}}>
                                        VND&nbsp;{(parseInt(location.state.detail_customer.split(".")[0]) * data?.cost_adult + parseInt(location.state.detail_customer.split(".")[1]) * data?.cost_kid).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </div>
                                        <div>
                                        VND&nbsp;{(parseInt(location.state.detail_customer.split(".")[0]) * data?.cost_adult + parseInt(location.state.detail_customer.split(".")[1]) * data?.cost_kid - data?.discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </div>
                                    </>
                                }
                                {
                                    data?.discount<=0 &&(parseInt(location.state.detail_customer.split(".")[0]) * data?.cost_adult + parseInt(location.state.detail_customer.split(".")[1]) * data?.cost_kid).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", maxWidth: 1024, display:"flex", flexDirection: "row-reverse", marginTop: 20}}>
                    <Link to={setTimeout(()=> "/booking/v2/"+ query.get("id"), 2000)} style={{textDecoration: "none"}} state={{...props, ...data, ...location.state}}>
                        <div className='dsplplpwlpawlwpaw' style={{padding: "8px 16px", fontWeight: 600, color: "#fff", background: "#f96d01", width: 320, boxSizing: "border-box", borderRadius: 10, height: 50, display: 'flex',justifyContent: "center", alignItems: "center"}}>{loading=== false ? "Tiếp tục" : <CircularProgress color="secondary" />}</div>
                    </Link>
                </div>
                <Suggest hotel={true} title={"Được đề xuất cho bạn"} {...props} {...data} />
            </>
        }
    </div>
  )
}


export default memo(PreBookingComponent)