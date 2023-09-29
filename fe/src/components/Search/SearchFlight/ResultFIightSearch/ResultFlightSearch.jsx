import BrandFlight from "./BrandFlight"
import CostFlight from "./CostFlight"
import Entity from "./Entity"
import TimeConsume from "./TimeConsume"
import TimeDestination from "./TimeDestination"
import TimeOrigin from "./TimeOrigin"

const ResultFlightDetail= (props)=> {
    return (
      <>
        <div className="qoe-1">
          <div className="sow-1">
            <div className="koa-1">
              <div className="kwe-3">
                <BrandFlight brand={props.brand} logo_brand={props.logo_brand} />
                <div className="ekw-5">
                  <div className="iwe-2">
                    <TimeOrigin timestart={props.timestart} origin={props.origin} />
                    <TimeConsume timearrive={props.timearrive} daydestination={props.daydestination}dayflight={props.dayflight}timestart={props.timestart} />
                    <TimeDestination timearrive={props.timearrive}daydestination={props.daydestination} destination={props.destination} />
                  </div>
                  <Entity package={props.package} eating={props.eating} entertainment={props.entertainment} charger={props.charger} />
                </div>  
              </div>
              <div className="eoq-5">
              </div>
            </div>
            <CostFlight xxxx={props.xxxx} discount={props.discount} cost_adult={props.cost_adult} {...props} />
          </div>
        </div>
        <div className="css-2">
                  
        </div>
      </>
    )
  }

export default ResultFlightDetail