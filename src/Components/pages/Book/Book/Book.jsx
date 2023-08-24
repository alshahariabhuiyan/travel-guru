import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../../Header/NavigationBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import DatePic from '../Datepicker/DatePic';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Bookleftnav from '../Bookleftnav/Bookleftnav';
import { getplaceCart } from '../../../../Utilities/fakeDb/fakeDb';


const Book = () => {
    const {data} = useContext(AuthContext)
    const [view, setView] = useState('')
    const storedCart = getplaceCart()
    useEffect(() => {
        
        data.map(d => viewDetails(d));

       },[data])
    const viewDetails = (detail) => {
        for(const _id in storedCart){
            if(detail.id == _id){
                setView(detail)
                
            } else {
                console.log('does not exist')
                
            }
        }
    }
    // console.log(data, storedCart)
    return (
        <div className='main-container'>
            <div className="overlay">
                <div className="text">
                <Container>
                <NavBar></NavBar> 
                <Row>
                <Col sm={6}>
                
                <Bookleftnav
                key={view.id}
                view={view}
                ></Bookleftnav>
                </Col>
                <Col sm={6}>
                    <DatePic></DatePic>
                </Col>
            </Row>
                </Container>
                
                </div>
            </div>
            
        </div>
    );
};

export default Book;