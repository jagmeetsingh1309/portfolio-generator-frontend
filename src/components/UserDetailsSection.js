import React from 'react';
import styled from 'styled-components';
import { 
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineInstagram,
    AiFillFacebook,
    AiFillTwitterCircle
} from 'react-icons/ai';

const Badge = styled.div`
    background-color: #E3EAF2;
    padding: 0.15rem 0.75rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
`;

const UserDetailsSection = ({ tags,description }) => {
    return (
        <div>
            <div className='my-4'>
                <p>{description}</p>
            </div>
            <div className='d-flex flex-wrap align-content-between'>
                {
                    tags.map(tag => <Badge key={tag}>{tag}</Badge>)
                }
            </div>
            <div className='d-flex my-3'>
                <AiOutlineGithub size={24} />
                <AiFillLinkedin size={24} />
                <AiFillYoutube size={24} />
                <AiOutlineInstagram size={24} />
                <AiFillFacebook size={24} />
                <AiFillTwitterCircle size={24} />
            </div>
        </div>
    );
}

export default UserDetailsSection;