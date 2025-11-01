import React from 'react'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <a href="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        Order Management
                    </div>
                </a>
                <a href="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Favorite Product
                    </div>
                </a>
                <a href="/user/addresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Addresses
                    </div>
                </a>

                <a href="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Profile
                    </div>
                </a>


            </div>
        </div>
    )
}

export default SideBar
