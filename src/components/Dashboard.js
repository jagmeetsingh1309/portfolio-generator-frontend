import React from "react";
import ProfileCard from "./ProfileCard";
import TestimonialSection from "./TestimonialSection";


const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-1"><ProfileCard /></div>
                <div className="col-lg-6"><TestimonialSection /></div>
            </div>
        </div>
    );
}

export default Dashboard;