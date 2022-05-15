import React from "react";
import { Button } from "react-bootstrap";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {

    const TESTIMONIAL_LIST = [
        {
            id:"1",
            description: "Working with Jagmeet was a breeze! Not only is he extremely talented," +
            "but he handles herself professionally and was able to tackle" + 
            "quite a large project with a pretty tight deadline." +
            "I can't wait to work with him again!",
            author: "Jessica",
            position: "PM, Benton, California"
        },
        {
            id:"2",
            description: "Jagmeet is so fab! he's really on it with communication," +  
            "dives right into the project and is super efficient." + 
            "He really got what we were going for and is happy to come back with amends until the project is perfect.",
            author: "Vinod",
            position: "California"
        },
        {
            id: "3",
            description: "Jagmeet had a well organized and effective strategy for achieving my end result, which I truly loved!",
            author: "Shiego Maruyama",
            position: "CEO,Kindle Company"
        }
    ]

    return (
        <div className="row">
            <div className="col-12">
                <h5>Testimonials</h5>
                <div className="d-grid mt-3">
                    <Button 
                        variant="outline-secondary" 
                        size="md"
                    >
                        Write something to Jagmeet Singh
                    </Button>
                </div>
            </div>
            {
                TESTIMONIAL_LIST
                    .map(
                        testimonial => <Testimonial key={testimonial.id} 
                        description={testimonial.description} author={testimonial.author} position={testimonial.position}  
                        />
                    )
            }
        </div>
    );
}

export default TestimonialSection;