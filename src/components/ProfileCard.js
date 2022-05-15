import React from 'react';
import { Card } from 'react-bootstrap';
import { 
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineInstagram,
    AiFillFacebook,
    AiFillTwitterCircle
} from 'react-icons/ai';
import { MdWork,MdLocationOn } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';

const ProfileCard = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className='text-center'>Jagmeet Singh</h4>
                <h6><MdWork />HSBC Software Development India</h6>
                <h6><IoBookSharp />Guru Tegh Bahadur Institute of Technology</h6>
                <h6><MdLocationOn />New Delhi, India</h6>
                <div>
                    <span>Top Skills: ReactJS,Spring Boot,Mongo</span>
                </div>
                <div className='d-flex justify-content-center'>
                    <AiOutlineGithub size={24} />
                    <AiFillLinkedin size={24} />
                    <AiFillYoutube size={24} />
                    <AiOutlineInstagram size={24} />
                    <AiFillFacebook size={24} />
                    <AiFillTwitterCircle size={24} />
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;