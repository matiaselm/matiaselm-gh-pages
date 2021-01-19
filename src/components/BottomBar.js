import React from 'react';
import styles from 'styles/styles';

const BottomBar = () => {
    return (<div style={styles.bar}>
        <p style={{ margin: 8 }}>
            TO-DO: <br />
                - Add personal info, maybe to header <br />
                - Add project cards <br />
                - Add element to show personal info <br />
                - Show project add input only to myself <br />
        </p>
    </div>)
}

export default BottomBar;