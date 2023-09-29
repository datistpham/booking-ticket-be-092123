import React from 'react'
import StarReview from '../../component/StarReview'
import { scroll } from './TypeRoomHotel'

const FilterByStar = (props) => {
  return (
    <div className='fkkfdgrwketoepre'>
        <div className='jroiwejrfsdfs'>Hạng sao</div>
        {
            Array.from(Array(5).keys()).map((item, key)=> <C key={key} count={parseInt(key + 1)} setreviewstar={props.setreviewstar} reviewstar={props.reviewstar} />)
        }
    </div>
  )
}
const C= (props)=> {
    const setV= (e)=> {
        scroll.scrollToTop()
        if(props.reviewstar.includes(parseInt(e.target.value))=== true) {
            props.setreviewstar(props.reviewstar.filter(item=> item !==parseInt(e.target.value)))
        }
        else if(props.reviewstar.includes(parseInt(e.target.value))=== false) {
            props.setreviewstar(prev=> ([...prev, parseInt(e.target.value)]))
        }
    }
    return (
        <div className='fdfdfgklesfgkdfmal'>
            <input type="checkbox" name="e" value={parseInt(props.count)} onChange={(e)=> setV(e)} />
            {
                Array.from(Array(props.count).keys()).map((item)=> <StarReview key={item} />)
            }
        </div>
    )
}

export default FilterByStar