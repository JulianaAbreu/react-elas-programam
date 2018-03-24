import React from 'react';
import axios from 'axios';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import SideMenu from '../SideMenu/index.js';
import './App.css';


class App extends React.Component {
 

  render() {
  
    return (
      <div className="App">
        <SideMenu />
        <div className="container">
          <h1>Estudantes</h1>
          <StudentForm  />
          <StudentList  />
        </div>
      </div>
    );
  }
}

export default App;
