import React, { useState, useEffect } from 'react';
import firebase from "./Firestore";

const db = firebase.firestore();                    // Init firebase firestore

db.settings({
    timestampsInSnapshots: true
});

const projects = db.collection('projects');         // Points to firebase collection 'projects'

const ProjectInput = (props) => {
    const [project, setProject] = useState({            // Init project state object
        title: '',
        subtitle: '',
        info: '',
        imagesrc: 'https://placekitten.com/300/200',
        projecturl: '#'
    });

    const handleChange = e => {                        // Handle any form input when changed
        setProject((prevState) => ({                    // Change the specified part of object while maintaining the others
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = e => {
        console.log(`Submitting object: 
        ${project.title} 
        ${project.subtitle} 
        ${project.info}
        ${project.imagesrc}
        ${project.projecturl}`)
        e.preventDefault()
        projects.add({                                  // Adds the project object to collection
            title: project.title,
            subtitle: project.subtitle,
            info: project.info,
            imagesrc: project.imagesrc,
            projecturl: project.projecturl
        })

        setProject({                                    // After submitting the form, the state is updated to default
            title: '',
            subtitle: '',
            info: '',
            imagesrc: 'https://placekitten.com/300/200',
            projecturl: '#'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Project title"
                value={project.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="subtitle"
                placeholder="Subtitle for project"
                value={project.subtitle}
                onChange={handleChange}
            />
            <input
                type="text"
                name="info"
                placeholder="Project info"
                value={project.info}
                onChange={handleChange}
            />
            <input
                type="text"
                name="imagesrc"
                placeholder="Image source"
                value={project.imagesrc}
                onChange={handleChange}
            />
            <input
                type="text"
                name="projecturl"
                placeholder="Project page"
                value={project.projecturl}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );

}

export default ProjectInput;