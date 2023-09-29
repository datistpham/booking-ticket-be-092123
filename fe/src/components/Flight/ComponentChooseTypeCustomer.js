const ComponentChooseTypeCustomer= (props)=> {
    return (
        <div className="ao-1">
            <div className="ap-1">
                <div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2c0dc7e0e7347fb5200a1aa692786496.svg" alt="open" style={{marginRight: 12}} />
                    <div>
                        <div style={{height: "auto"}}>Người lớn</div>
                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(từ 12 tuổi)</div>
                    </div>
                </div>
                <div>   
                    <button disabled={(parseInt(props.data.adult) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, adult: parseInt(props.data.adult) - 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                    <div className="rw-1">
                        {props.data.adult}
                    </div>
                    <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, adult: parseInt(props.data.adult) + 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                </div>
            </div>
            <div className="ap-1">
                <div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/596fe65c9b360b34afef792214b8c387.svg" alt="open" style={{marginRight: 12}} />
                    <div>
                        <div style={{height: "auto"}}>Trẻ em</div>
                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(từ 2 đến 11 tuổi)</div>
                    </div>
                </div>
                <div>   
                    <button disabled={(parseInt(props.data.kid) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, kid: parseInt(props.data.kid) - 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                    <div className="rw-1">
                        {props.data.kid}
                    </div>
                    <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, kid: parseInt(props.data.kid) + 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                </div>
            </div>
            <div className="ap-1">
                <div>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/972714e5c8656d1b98aa564dfed79cee.svg" alt="open" style={{marginRight: 12}} />
                    <div>
                        <div style={{height: "auto"}}>Em bé</div>
                        <div style={{fontSize: 12, fontWeight: 500, color: "#687176"}}>(dưới 2 tuổi)</div>
                    </div>
                </div>
                <div>   
                    <button disabled={(parseInt(props.data.baby) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, baby: parseInt(props.data.baby) - 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                    <div className="rw-1">
                        {props.data.baby}
                    </div>
                    <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, baby: parseInt(props.data.baby) + 1}))}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                </div>
            </div>
            <div className="de-1">
                <button onClick={(e)=> {
                    e.stopPropagation()
                    props.setopensuggest(()=> false)
                }} className="fk-1">Xong</button>
            </div>
        </div>
    )
}

export default ComponentChooseTypeCustomer