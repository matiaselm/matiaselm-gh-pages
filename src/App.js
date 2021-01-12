import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

const App = ()=> {
  return (
    <div id='background'>
      <header>
        <h1>Under construction</h1>
        <p>
          <a href='https://github.com/matiaselm'>Matias'</a> portfolio. I'll be collecting all my done projects and own stuff here
        </p>
      </header>
      <body>
        {/* Container to hold all info cards table-like */}
        <div id='cardContainer'>
        <Card>
          <Card.Title>About me</Card.Title>
        </Card>
        </div>
      </body>
    </div>
  );
}

export default App;
