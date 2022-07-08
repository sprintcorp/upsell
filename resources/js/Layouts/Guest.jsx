import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

export default function Guest({ children }) {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={6}>
                    <div className="mb-5 mt-5 align-self-center">
                        <Link href="/">
                            <ApplicationLogo/>
                        </Link>
                    </div>
                    <Card>
                        <Card.Body className="p-5">
                            {children}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

