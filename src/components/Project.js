import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Badge = styled.div`
    border: 1px solid #DCDCDC;
    font-size: 14px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    margin-right: 0.75rem;
`;

const Project = ({ title,description, tags }) => {
    return (
        <Card className="my-3 project">
            <Card.Body>
                <div className="d-flex">
                    <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <div className="d-flex flex-wrap">
                            {tags.map(tag => <Badge key={tag} >{tag}</Badge>)}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Project;