import React from 'react'
import F2 from './F2'
import F3 from './F3'
import F4 from './F4'
import F5 from './F5'

const FilterTool = (props) => {
    return (
        <div className="kew-1">
          <div className="wqo-1">
            <div className="sai-1">
              Bộ lọc: 
            </div>
            <div className="wai-1">
              <F2 settimedestination={props.settimedestination} settimeorigin={props.settimeorigin} resultsearch={props.resultsearch} setfindbytimeflight={props.setfindbytimeflight} findbytimeflsetfindbytimeflight={props.findbytimeflsetfindbytimeflight} />
              <F3 resultsearch={props.resultsearch} setfindbybrand={props.setfindbybrand} findbybrand={props.findbybrand} />
              <F4 setListRange={props.setListRange} findbyrangecost={props.findbyrangecost} setfindbyrangecost={props.setfindbyrangecost} setresultsearch={props.setresultsearch} settimedestination={props.settimedestination} settimeorigin={props.settimeorigin} resultsearch={props.resultsearch} setfindbytimeflight={props.setfindbytimeflight}  />
            </div>
          </div>
          <F5 resultsearch={props.resultsearch} setresultsearch={props.setresultsearch} />
        </div>
      )
}

export default FilterTool