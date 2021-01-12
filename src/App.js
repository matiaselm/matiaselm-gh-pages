import React from 'react';
import './App.css';
import CustomCard from 'components/CustomCard';
import styles from 'styles/styles';
import ProjectTable from 'components/ProjectTable';

const App = ()=> {
  return (
    <div style={styles.background}>
      <header>
        <h1>Under construction</h1>
        <p>
          <a href='https://github.com/matiaselm'>Matias'</a> portfolio. I'll be collecting all my done projects and own stuff here
        </p>
      </header>
      <body>
        {/* Container to hold all info cards table-like */}
        <ProjectTable />
        <p>to-do: <br />
            - Span cards to multiple rows <br />
            - Create file containing info on all projects and write about the most important ones <br></br>
            - Add personal info, maybe to header</p>
      </body>
    </div>
  );
}

export default App;
