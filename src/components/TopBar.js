import React from 'react';
import styles from 'styles/styles';

const TopBar = () => {
    return (<div style={styles.topBar}>
        <h1>Matias Jalava - Portfolio</h1>   {/* <header> */}
        <a href="https://github.com/matiaselm" style={{ color: 'white', position: 'absolute', right: 8, top: 8, fontSize: '2ch' }}>My GitHub</a>
        <p>
            Thanks for stopping by! I'll be collecting all my
            done projects and other own stuff here in these cards. <br/>
            Click on their images to be taken on their project-sites.
            This list is not yet complete, so feel free to visit my github
        </p>
    </div>)
}

export default TopBar;