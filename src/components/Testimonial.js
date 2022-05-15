import React from "react";
import { Card } from "react-bootstrap";

const Testimonial = ({description, author,position}) => {

    return (
        <div className="col-lg-6">
            <Card className="testimonial">
                <Card.Body>
                    <p>{description}</p>
                    <h6>{author}</h6>
                    <span>{position}</span>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Testimonial;