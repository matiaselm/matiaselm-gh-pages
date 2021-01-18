import React, { useEffect, useState } from 'react';
import './App.css';
import styles from 'styles/styles';
import ProjectTable from 'components/ProjectTable';
import ProjectInput from 'components/Project';
import firebase from 'services/firebase';

const App = () => {
  const [list, setList] = useState([])

  const getProjects = async () => {
    let collection = []
    try {
      firebase.firestore().collection('projects').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data())
            collection.push(doc.data())
          })
          console.log('Collection: ' + collection);
          console.log('Collection object: ' + collection[1].title)
          setList(collection)
          return
        })
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    getProjects()       // TODO: Try to remember how to re-render after this fetch has finished
  }, [])

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
        <ProjectTable list={list} />
        <p>
          to-do: <br />- Firestore db for project cards <br></br>- Add personal info, maybe to
          header
        </p>
      </body>
    </div>
  );
};

export default App;
