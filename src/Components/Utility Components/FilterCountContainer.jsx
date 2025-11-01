import React from 'react'
import UnopDropdown from 'unop-react-dropdown'

const FilterCountContainer = ({title}) => {
    const handler=()=> {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <i class="fa-solid fa-arrow-down-wide-short" style={{fontSize:'20px'}}></i>
                            Sort
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div className="border-bottom card-filter-item">Top Sales</div>
                        <div className="border-bottom card-filter-item">Top Rated</div>
                        <div className="border-bottom card-filter-item">Price from cheapest to most expensive</div>
                        <div className=" card-filter-item">Price from most expensive to cheapest</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
  )
}

export default FilterCountContainer
