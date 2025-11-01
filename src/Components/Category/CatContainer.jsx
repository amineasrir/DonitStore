import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CatCard from './CatCard';
import clothe from "../../Assets/IMG/clothe.png";
import labtop from "../../Assets/IMG/labtop.png";
import sale from "../../Assets/IMG/sale.png";
import pic from "../../Assets/IMG/pic.png";


const CatContainer = () => {
  return (
    <div>
      <Container >
        <div className="admin-content-text mt-2 ">All Categories</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CatCard title="Tech" img={clothe} background="#F4DBA4" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
                <CatCard title="Tech" img={labtop} background="#0034FF" />
                <CatCard title="Tech" img={sale} background="#F4DBA4" />
                <CatCard title="Tech" img={clothe} background="#FF6262" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
                <CatCard title="Tech" img={clothe} background="#F4DBA4" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
                <CatCard title="Tech" img={labtop} background="#0034FF" />
                <CatCard title="Tech" img={sale} background="#F4DBA4" />
                <CatCard title="Tech" img={clothe} background="#FF6262" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
                <CatCard title="Tech" img={clothe} background="#F4DBA4" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
                <CatCard title="Tech" img={labtop} background="#0034FF" />
                <CatCard title="Tech" img={sale} background="#F4DBA4" />
                <CatCard title="Tech" img={clothe} background="#FF6262" />
                <CatCard title="Tech" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    </div>
  )
}

export default CatContainer
