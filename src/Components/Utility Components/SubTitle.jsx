import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const SubTitle = ({ title, btnTitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
        <div className="sub-tile">{title}</div>
        {btnTitle ? (
            <BrowserRouter>
            <a   href={`${pathText}`} style={{ textDecoration: 'none' }}>
                <span className="shopping-now">{btnTitle}</span>
            </a>
            </BrowserRouter>
        ) : null}
    </div> 
  )
}

export default SubTitle
