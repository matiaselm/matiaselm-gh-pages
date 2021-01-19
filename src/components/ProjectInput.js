import React, { useState, useEffect } from 'react';
import firebase from "../services/firebase";
import styles from 'styles/styles';
const db = firebase.firestore();                    // Init firebase firestore

db.settings({
    timestampsInSnapshots: true
});

const projects = db.collection('projects');         // Points to firebase collection 'projects'

const ProjectInput = (props) => {
    const [project, setProject] = useState({            // Init project state object
        title: '',                                      // The name of the project
        subtitle: '',                                   // Secondary info
        info: '',                                       // Own thoughts about the project / info what it is and does
        type: '',                                       // Code language used / the type of the project
        imagesrc: '',                                   // Custom image for the project
        projecturl: '#'                                 // URL for the project's site
    });

    const handleChange = e => {                         // Handle any form input when changed
        setProject((prevState) => ({                    // Change the specified part of object while maintaining the others
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log('Type: ' + project.type)
    };

    const handleSubmit = e => {                         // Creates an object with given input 
        console.log(`Submitting object: 
        ${project.title} 
        ${project.subtitle} 
        ${project.info}
        ${project.type}
        ${project.imagesrc}
        ${project.projecturl}`)
        e.preventDefault()

        if (project.imagesrc.length < 5) {
            setProject((prevState) => ({                    // Change the specified part of object while maintaining the others
                ...prevState,
                imagesrc: ''
            }));
        }

        projects.add({                                  // Adds the project object to collection
            title: project.title,
            subtitle: project.subtitle,
            info: project.info,
            type: project.type,
            imagesrc: project.imagesrc,
            projecturl: project.projecturl
        })

        setProject({                                    // After submitting the form, the state is updated to default
            title: '',
            subtitle: '',
            info: '',
            type: '',
            imagesrc: '',
            projecturl: '#'
        })
    }

    return (
        <div style={styles.input}>
            <form id='submitForm' onSubmit={handleSubmit}>
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
                    placeholder="Date of the project"
                    value={project.subtitle}
                    onChange={handleChange}
                />

                <textarea name="info" form='submitForm' value={project.info}
                    onChange={handleChange} style={{ resize: 'horizontal' }}>About the project</textarea>

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
                <div>       {/* Radio buttons to select project type */}
                    <input style={styles.radio} type="radio" id="other" name="type" value="other"
                        onClick={handleChange} checked={project.type === 'other'}
                    />
                    <label for="other">Other</label>

                    <input style={styles.radio} type="radio" id="web" name="type" value="web"
                        onClick={handleChange} checked={project.type === 'web'}
                    />
                    <label for="web">Web</label>

                    <input style={styles.radio} type="radio" id="react" name="type" value="react"
                        onClick={handleChange} checked={project.type === 'react'}
                    />
                    <label for="web">React</label>

                    <input style={styles.radio} type="radio" id="kotlin" name="type" value="kotlin"
                        onClick={handleChange} checked={project.type === 'kotlin'}
                    />
                    <label for="kotlin">Kotlin</label>

                    <input style={styles.radio} type="radio" id="javascript" name="type" value="javascript"
                        onClick={handleChange} checked={project.type === 'javascript'}
                    />
                    <label for="javascript">JavaScript</label>
                </div>
                <button type="submit">Add</button>
            </form>

        </div>
    );

}

export default ProjectInput;