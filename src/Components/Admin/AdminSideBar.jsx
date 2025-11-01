import React from 'react'

const AdminSideBar = () => {
  return (
    <div className="sidebar">
            <div className="d-flex flex-column">
                <a href="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        Orders Management
                    </div>
                </a>
                <a href="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Products Management
                    </div>
                </a>
                <a href="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Brand
                    </div>
                </a>

                <a href="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Category
                    </div>
                </a>

                <a href="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Sub-Category
                    </div>
                </a>

                <a href="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Product
                    </div>
                </a>

            </div>
        </div>
  )
}

export default AdminSideBar
