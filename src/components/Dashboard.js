import React from "react";
import ProfileCard from "./ProfileCard";
import ProjectSection from "./ProjectSection";
import TestimonialSection from "./TestimonialSection";
import UserDetailsSection from "./UserDetailsSection";
import styled from "styled-components";

const FixedColumn = styled.div`
    @media(min-width: 1024px){
        position: fixed
    }
`;

const MovingColumn = styled.div`
    @media(min-width: 1024px){
        position: absolute; 
        left: 45%
    }
`;


const USER = {
    name: "Jagmeet Singh",
    title: "Trainee Software Engineer at HSBC",
    location:"New Delhi, India",
    description:"A software engineer who has the zeal to explore" + 
    " and learn new technologies to solve problems in real life to make life easier to live.",
    tags: ["Software Engineer","Full-stack Engineer","Java Developer","React Developer"],
    githubLink: "",
    linkedinLink: "",
    youtubeLink: ""
}

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <FixedColumn className="col-lg-4 offset-lg-1">
                    <ProfileCard name={USER.name} title={USER.title} location={USER.location} />
                </FixedColumn>
                <MovingColumn className="col-lg-6" style={{  }}>
                    <UserDetailsSection tags={USER.tags} description={USER.description} />
                    <ProjectSection />
                    <TestimonialSection />
                </MovingColumn>
            </div>
        </div>
    );
}

export default Dashboard;