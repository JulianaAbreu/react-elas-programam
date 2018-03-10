import React, { Component } from 'react';
import logo from './logo.svg';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import './App.css';

class App extends Component {
  state = {
    students: [{
      nome: 'nome',
      matricula: 'matricula',
      serie: 'serie',
      rg: 'rg',
    }]
  }
  addStudent = (student) =>{
    const {students} = this.state;
    this.setState({
      students: students.concat(student)
    })
  }
  deleteByIndex = (index) =>{
    const {students} = this.state;
    this.setState({
      students: [
        ...students.slice(0, index),
        ...students.slice(index+1)
      ]
    })
  }
  render() {
    const { students } = this.state;
    const { addStudent, deleteByIndex } = this;
    return (
      <div className="App">
        <div className='container'>
          <h1>Gerenciador de Estudantes</h1>
          <StudentForm addStudent={addStudent} />
          <StudentList deleteByIndex={deleteByIndex} students={students} />
        </div>
      </div>
    );
  }
}

export default App;
