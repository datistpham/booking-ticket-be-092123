import React from 'react'
import { memo } from 'react'
import TheTitle1 from './TheTitle1'
import TheTitle2 from './TheTitle2'
import TheTitle3 from './TheTitle3'

const TitleSearchFlight = (props) => {
  return (
    <div className="aso-1">
        <div className="dkw-1">
          <TheTitle1 {...props} />
          <TheTitle2 />
        </div>
        <TheTitle3 />
    </div>
  )
}

export default memo(TitleSearchFlight)