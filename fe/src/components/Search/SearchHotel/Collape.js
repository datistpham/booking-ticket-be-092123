import React from 'react'
import { scroll } from './TypeRoomHotel'

const Collape = (props) => {
  const resetall= ()=> {
    scroll.scrollToTop()
    props.settypehotel(()=> "")
    props.setreviewstar(()=> [])
    props.setListRange(()=> [])
  }
  return (
    <>
    <div className='kfwekgopef'>
        <div className='sdfsdafdafwrgh'>
            Lọc kết quả 
        </div>
        <div className='jdefkgjdsfgjdsk' style={{cursor: "pointer"}} onClick={resetall}>
            Đặt lại bộ lọc
        </div>
    </div>
    <div className='bjdfbdsfbfdf'>
        Hiển thị kết quả phân loại theo: 
    </div>
    </>
  )
}

export default Collape