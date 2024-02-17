import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import SpinnerImg from './spinner.svg';

const UsersList = ({ onUserSelected }) => {

    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then((response) => {
                setData(response.data.reverse())
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setSpinner(false);
            })
    }

    return (
        <>

            <h1 className='heading'>Users List</h1>
            <div className="head-st"></div>
            <div className='left-container'>
                {spinner ? (
                    <div className="spinner">
                        <Image src={SpinnerImg} />
                    </div>
                ) : (
                    <Row>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((item) => (
                                <Col sm={12} md={12} lg={12} xl={12} xxl={6} className='mt-4' key={item.profile.username}>
                                    <div className="content">
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={3}>
                                                        <Image
                                                            style={{ width: '85px' }}
                                                            src={item.avatar}
                                                            roundedCircle />
                                                    </Col>
                                                    <Col xs={9}>
                                                        <div style={{ marginLeft: '20px' }}>
                                                            <Card.Title style={{ color: '#666', fontSize: '20px' }}>
                                                                {item.profile.firstName + " " + item.profile.lastName}
                                                            </Card.Title>
                                                            <Card.Subtitle
                                                                style={
                                                                    { fontStyle: 'italic', color: '#0047ab', fontSize: '13px' }
                                                                }>
                                                                {item.jobTitle}
                                                            </Card.Subtitle>

                                                            <Button
                                                                style={{ fontSize: '12px', marginTop: '10px' }}
                                                                variant="secondary"
                                                                size='sm'
                                                                onClick={() => onUserSelected(item)}
                                                            >Know More</Button>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            ))
                        ) : (

                            <div style={{
                                height: '250px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'last baseline'
                            }}>
                                <h2 >Data not available</h2>
                            </div>
                        )}
                    </Row>
                )}
                {error && <h5 style={{ textAlign: 'center', color: 'red' }}>Error : {error.message}</h5>}
            </div>



        </>
    )
}

export default UsersList;
