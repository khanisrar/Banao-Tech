import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";



const Home = () => {

    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    }

    return (
        <>
            <Container style={{ padding: '100px 20px' }}>
                <Row>
                    <Col xl={7} lg={6} md={12} className="mt-4">
                        <UsersList onUserSelected={handleUserSelect} />
                    </Col>
                    <Col xl={5} lg={6} md={12} className="mt-4">
                        <UserDetails user={selectedUser} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;
