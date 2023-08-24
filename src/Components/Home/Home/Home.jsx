import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Leftnav from '../Leftnav/Leftnav';
import Rightnav from '../Rightnav/Rightnav';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Row>
                <Col sm={5}>
                    <Leftnav></Leftnav>
                </Col>
                <Col sm={7}>
                    <Rightnav></Rightnav>
                </Col>
            </Row>
        </div>
    );
};

export default Home;