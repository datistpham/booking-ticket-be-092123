import React from 'react'
import { Link } from 'react-router-dom'

const TheTitle3 = () => {
  return (
    <Link to="/booking?q=flight" style={{textDecoration: "none"}}>
      <div className="iew-1">
          <div className="dsd-1" role={"button"}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_search_24px-dee9abb8908124af6564d818120f1c08.svg" height="16" width="16" alt="open" />
              <div className="adw-2">
                  Đổi tìm kiếm
              </div>
          </div>
      </div>
    </Link>
  )
}

export default TheTitle3