const ComponentSuggestSearch= (props)=> {
    return (
        <div className="lm-4" onClick={(e)=> {
            e.stopPropagation()
            props.setsuggest(()=> undefined)
            props.setopensuggest((prev)=> !prev)                                    
            props.setchoose((prev)=> ({...prev, location_airport: props?.location_airport, code_airport: props?.code_airport}))
        }}>
        <div>
            {props?.location_airport}, {props?.country_airport}
        </div>
        <div>
            {props?.code_airport} -  {props?.name_airport}
        </div>
    </div>
    )
}

export default ComponentSuggestSearch