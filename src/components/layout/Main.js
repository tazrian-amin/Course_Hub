import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Aside from '../shared/Aside';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <Aside></Aside>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;