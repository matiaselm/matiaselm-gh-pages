import React from 'react';
import CustomCard from 'components/CustomCard';
import styles from 'styles/styles';

const projects = [
    {
        title: 'Test1',
        subtitle: 'This is a first test project card',
        text: 'some general info about the project',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'secondTest',
        subtitle: 'The second test project card',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'third',
        subtitle: 'The second test project card',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'FourthCard',
        subtitle: 'Need to figure a good way to manage rows/columns for different screen sizes',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'FourthCard',
        subtitle: 'Need to figure a good way to manage rows/columns for different screen sizes',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'FourthCard',
        subtitle: 'Need to figure a good way to manage rows/columns for different screen sizes',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
    {
        title: 'FourthCard',
        subtitle: 'Need to figure a good way to manage rows/columns for different screen sizes',
        text: 'some general info. Gonna have to find a way to write more about these',
        imgSrc: 'https://placekitten.com/300/200',
        projectPage: '#',
    },
];

const ProjectTable = (props) => {
    return (
        <div style={styles.projectTable}>
            {projects.map((p, key) => (
                <CustomCard
                    key={key}
                    title={p.title}
                    subtitle={p.subtitle}
                    text={p.text}
                    imgSrc={p.imgSrc}
                    projectPage={p.projectPage}
                />
            ))}
        </div>
    );
};

export default ProjectTable;
