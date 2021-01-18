import React, { useEffect, useState } from 'react';
import './App.css';
import styles from 'styles/styles';
import ProjectTable from 'components/ProjectTable';
import ProjectInput from 'components/Project';
import { getProjects } from 'services/collection';

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getProjects()       // TODO: Try to remember how to re-render after this fetch has finished
  })

  return (
    <div style={styles.background}>
      <div> {/* <header> */}
        <h1>Under construction</h1>
        <p>
          <a href="https://github.com/matiaselm">Matias'</a> portfolio. I'll be collecting all my
          done projects and own stuff here
        </p>
      </div>
      <body> {/* <body> */}
        <ProjectInput />
        {/* Container to hold all info cards table-like */}
        <ProjectTable collection={list} />
        <p>
          to-do: <br />- Firestore db for project cards <br></br>- Add personal info, maybe to
          header
        </p>
      </body>
    </div>
  );
};

export default App;
