import React, { useEffect, useState } from 'react';
import CustomCard from 'components/CustomCard';
import styles from 'styles/styles';
import PropTypes from 'prop-types';


const ProjectTable = (props) => {
    const list = props.collection
    console.log('List: ' + list)

    return (
        <div style={styles.projectTable}>
            {Object.keys(list).map((p, key) => (
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
// TypeChecking using PropType
ProjectTable.propTypes = {
    collection: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string,
        imgSrc: PropTypes.string,
        projectPage: PropTypes.string
    })
}
export default ProjectTable;
