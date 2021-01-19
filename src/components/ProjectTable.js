import React, { useEffect, useState } from 'react';
import CustomCard from 'components/CustomCard';
import styles from 'styles/styles';
import PropTypes from 'prop-types';


const ProjectTable = ({ list }) => {
    console.log('List: ' + list)

    return (
        <div style={styles.projectTable}>
            {list.map((p, key) => {
                console.log('Card' + key, 'imgSrc', p.imagesrc);
                return <CustomCard
                    key={key}
                    title={p.title}
                    subtitle={p.subtitle}
                    text={p.info}
                    type={p.type}
                    imgSrc={p.imagesrc}
                    projectPage={p.projecturl}
                />
            })}
        </div>
    );
};
/*
// TypeChecking using PropType
ProjectTable.propTypes = {
    collection: PropTypes.shape([{
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string,
        imgSrc: PropTypes.string,
        projectPage: PropTypes.string
    }])
}*/
export default ProjectTable;
