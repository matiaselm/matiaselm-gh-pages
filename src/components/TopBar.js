import React from 'react';
import styles from 'styles/styles';

const TopBar = () => {
    return (<div style={styles.bar}>
        <h1>Matias Jalava - Portfolio</h1>   {/* <header> */}
        <a href="https://github.com/matiaselm" style={{ color: 'white', position: 'absolute', right: 8, top: 8, fontSize: '2ch' }}>My GitHub</a>
        <p>
            Thanks for stopping by! I'll be collecting all my
            done projects and other own stuff here in these cards. You're welcome to take a look!
        </p>
    </div>)
}

export default TopBar;