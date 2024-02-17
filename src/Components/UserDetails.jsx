import React from 'react';
import { Table, Card, Image, Row, Col } from 'react-bootstrap';

const UserDetails = ({ user }) => {

    return (
        <>
            <h1 className='heading'>User Details</h1>
            <div className="head-st"></div>
            <div className='right-container'>
                <></>
                {user ?
                    (
                        <Col sm={12}>
                            <Card style={{ textAlign: 'center' }}>
                                <Card.Body>
                                    <Row>
                                        <Col xs={12}>
                                            <Image
                                                style={{ width: '100px' }}
                                                src={user.avatar}
                                                roundedCircle />
                                        </Col>
                                        <Col xs={12}>
                                            <Card.Title style={{ fontSize: '25px', margin: '10px 0' }}>
                                                {user.profile && `${user.profile.firstName} ${user.profile.lastName}`}
                                            </Card.Title>
                                            <Card.Subtitle
                                                style={
                                                    { fontStyle: 'italic', color: '#0047ab', fontSize: '15px' }
                                                }>
                                                {user.jobTitle}
                                            </Card.Subtitle>
                                            <Card.Text style={{ color: '#666', marginTop: '10px', fontSize: '20px' }}>
                                                {user.Bio}
                                            </Card.Text>
                                            <Table striped bordered hover className='table'>
                                                <tbody>

                                                    <tr>
                                                        <td>Username : </td>
                                                        <td>
                                                            {user.profile && user.profile.username}
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>Email : </td>
                                                        <td>
                                                            {user.profile && user.profile.email}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Created At : </td>
                                                        <td>
                                                            {new Date(user.createdAt).toLocaleString()}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>)
                    : (
                        <div className='spinner'>
                            <h3>User Not Selected</h3>
                        </div>
                    )
                }
            </div >
        </>
    )
}

export default UserDetails;