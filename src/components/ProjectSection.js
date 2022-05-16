import React from "react";
import { Button } from "react-bootstrap";
import Project from "./Project";


const PROJECTS = [
    {
        title: "Job Orgainzer",
        description: "Created a web app powered by React, Node and mongodb." + 
        "Features implemented: 1) JWT based authentication" + 
        " 2) Create, Retreive and Update jobs" + 
        " 3) Protected routes based on authentication",
        tags: ["ReactJS","NodeJS","Mongo"]
    },
    {
        title: "Github Viewer",
        description: "Created a web app powered by ReactJs." + 
        "A nicer look at your GitHub profile and repo stats." + 
        "Includes data visualizations of your top languages, starred repositories," + 
        "and sort through your top repos by number of stars, forks, and size.",
        tags: ["ReactJS","D3.JS","Github API"]
    }

];

const ProjectSection = () => {
    return (
        <div className="row align-items-center">
            <div className="col-lg-10 col-md-10 col-sm-12">
                <h5>Projects</h5>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
                <Button variant="outline-primary w-100" size="sm">Add New</Button>
            </div>
            <div className="col-12">
                {
                    PROJECTS.map(project => <Project key={project.title} title={project.title} description={project.description} tags={project.tags}  />)
                }
            </div>
        </div>
    );
}

export default ProjectSection;