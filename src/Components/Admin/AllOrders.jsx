import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

const AllOrders = () => {
  return (
    <div>
        <div className='admin-content-text'>Orders Management</div>
        <Row className='justify-content-start'>
            <AdminAllOrdersItem />
            <AdminAllOrdersItem />
            <AdminAllOrdersItem />
        </Row>
    </div>
  )
}

export default AllOrders
