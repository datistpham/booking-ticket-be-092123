import React, { memo } from 'react'

const BrandFlight = (props) => {
  return (
    <div className="gae-2">
        <div>
            <img alt="VietJet Air" importance="low" loading="lazy" src={props.logo_brand} decoding="async" width="28" style={{height: 28, objectFit: "contain", objectPosition: "50% 50%"}} />
        </div>
        <div >
            {props.brand}
        </div>
    </div>
  )
}

export default memo(BrandFlight)