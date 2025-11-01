import React from 'react'

const RBtn = (click, disable) => {
  return (
    <i
        className="fa-solid fa-arrow-left"
        style={{fontSize:"30px", float: "right", marginTop: "220px", cursor: "pointer"}}
        onClick={click}
        onDisable={disable}>

    </i>
  )
}

export default RBtn
