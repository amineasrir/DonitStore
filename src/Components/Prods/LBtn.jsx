import React from 'react'

const LBtn = (click, disable) => {
  return (
    <i
        className="fa-solid fa-arrow-left"
        style={{fontSize:"30px", float: "left", marginTop: "220px", cursor: "pointer"}}
        onClick={click}
        onDisable={disable}>

    </i>
  )
}

export default LBtn
