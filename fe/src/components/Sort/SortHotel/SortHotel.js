import React, { useMemo } from 'react'
import _ from "lodash"

const SortHotel = (props) => {
  const s= useMemo(()=> ["Giá cao nhất","Giá thấp nhất", "Điểm đánh giá", "Độ phổ biến"], [])
  const sortBy= (e)=> {
      switch(e.target.value){ 
        case "Giá cao nhất":
            props.setlist(_.orderBy(props.list, ['cost_adult'], ['desc']))
            return
        case "Giá thấp nhất":
            props.setlist(_.orderBy(props.list, ['cost_adult'], ['asc']))
            return
        case "Điểm đánh giá":
            props.setlist(_.orderBy(props.list, ['review'], ['desc']))
            return
        case "Độ phổ biến":
            props.setlist(_.orderBy(props.list, ["access_views"], ["desc"]))
            return
        default:
            return
      }
  }
  return (
    <div className='fssdafgrgeira'>
        <div className='sdfsdafdafwdsrgh'>
            Sắp xếp kết quả 
        </div>
        <div className='jdefkgjdsfdsgjdsk'>
            Sắp xếp kết quả theo lựa chọn
        </div>
        <div className='fgwerwtrwette'>
            {
                s?.map((item, key)=> <C sortBy={sortBy} key={key} item={item} />)
            }
        </div>
    </div>
  )
}
const C= (props)=> {
    return <div className='wrtrwrtrw'><input type="radio" name="f" value={props.item} onChange={(e)=> props.sortBy(e)} /><div>{props.item}</div></div>
}

export default SortHotel