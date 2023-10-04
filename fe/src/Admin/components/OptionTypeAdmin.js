import ComponentOption from "./ComponentOption"

const OptionTypeAdmin= (props)=> {
    const option1= [{link: "all_flight", text: "Tất cả chuyến bay"}, {link: "prepare_flight", text: "Chuyến bay sắp khởi hành"}, {link: "activing_flight", text: "Chuyến bay đang cất cánh"}, {link: "expired_flight", text: "Chuyến bay đã quá hạn"}, {link: "new_flight", text: "Chuyến bay mới"},{link: "completed_flight", text: "Chuyến bay đã hoàn thành"}]
    const option2= [{link: "all_hotel", text: "Tất cả khách sạn"}, {link: "available_hotel", text: "Khách sạn có sẵn"},{link: "new_hotel", text: "Khách sạn mới được thêm"} ,{link: "expired_hotel", text: "Khách sạn hết hạn"}]
    
    return (
      <div className="sfdefdedg" style={{height: "100%", width: props.collapse=== false ? 300 : 0, backgroundColor: "#fff", overflow: 'hidden',}}>
        {
          props.type=== "flight" && 
          <div style={{width: "100%", padding: 16, display: "flex", flexDirection: "column", justifyContent: "center", boxSizing: "border-box"}}>
            {
              option1?.map((item, key)=> <ComponentOption key={key} {...item} {...props} />)
            }
            <ComponentOption type={"flight"} link="add_flight" text={"Thêm chuyến bay"} {...props} />
          </div>
        }
        {
          props.type=== "hotel" && 
          <div style={{width: "100%", padding: 16, display: "flex", flexDirection: "column", justifyContent: "center", boxSizing: "border-box"}}>
            {
              option2?.map((item, key)=> <ComponentOption key={key} {...item} {...props} />)
            }
            <ComponentOption type={"hotel"} link="add_hotel" text={"Thêm khách sạn"} {...props} />
          </div>
        }
      </div>
    )
  }
export default OptionTypeAdmin