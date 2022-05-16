import React from 'react';
import { Card } from 'react-bootstrap';


const ProfileCard = ({ name,title, location }) => {
    return (
        <Card style={{ border: "none" }}>
            <Card.Body>
                <h3>{name}</h3>
                <h5>{title}</h5>
                <h6>{location}</h6>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;