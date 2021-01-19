import React, { useEffect, useState } from 'react';
import './App.css';
import styles from 'styles/styles';
import ProjectTable from 'components/ProjectTable';
import ProjectInput from 'components/ProjectInput';
import TopBar from 'components/TopBar';
import BottomBar from 'components/BottomBar';
import Warning from 'components/Warning';
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
          setList(collection)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProjects()       // TODO: Try to remember how to re-render after this fetch has finished
  }, [])

  return (
    <div style={styles.background}>
      <TopBar />                    {/* TopBar and BottomBar are to show info and other stuff than the projects themselves */}
      <ProjectInput />
      <ProjectTable list={list} />  {/* Container to hold all info cards table-like */}
      <Warning />
      <BottomBar />
    </div >
  );
};

export default App;
