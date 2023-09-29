import React from 'react'

const Mode= (props)=> {
    return (
        <div className="al-1">
            <div>
                <div style={{width: 22, height: 22, display: "flex", justifyContent: 'center',alignItems: "center", background: "#2e89ff", borderRadius: "50%"}}>
                    <div role={"radio"} aria-checked={true} className="ro-1" style={{transitionDuration: "0.25s"}}></div>
                </div>
                <div className="tx-1">{props.category}</div>
            </div>
        </div>
    )
}

export default Mode

export const R2= (props)=> {
    return (
        <div>
            <div style={{width: 22, height: 22, display: "flex", justifyContent: 'center',alignItems: "center", background: "#2e89ff", borderRadius: "50%"}}>
                <div role={"radio"} aria-checked={true} className="ro-1" style={{transitionDuration: "0.25s"}}></div>
            </div>
            <div className="tx-1">{props.category}</div>
        </div>
    )
}