const TogglePlace= (props)=> {
    return (
        <div className="cv-1" role={"button"} onClick={()=> {
            props.setorigin(()=> props.destination)
            props.setdestination(()=> props.origin)
        }}>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/1a837f05ebf158ba20d966cd6038c757.svg" alt="open" width="20" height="20" />
        </div>
    )
}

export default TogglePlace