import React from 'react';
import axios from 'axios';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import './App.css';

const API = 'https://private-785c05-learnit.apiary-mock.com';

class App extends React.Component {
  state = {
    students: [
      {
        nome: 'nome',
        matricula: 'matricula',
        serie: 'serie',
        rg: 'rg'
      }
    ]
  };

  componentDidMount(){
    this.listStudents();
  }

  listStudents = () => {
    axios
      .get(`${API}/students`)
      .then(response => {
        this.setState({
          students: response.data,
        });
      })
      .catch(error => {
      });
  };

  addStudent = student => {
    const { students } = this.state;
    this.setState({
      students: students.concat(student)
    });
  };

  deleteByIndex = index => {
    const { students } = this.state;
    this.setState({
      students: [...students.slice(0, index), ...students.slice(index + 1)]
    });
  };
  render() {
    const { students } = this.state;
    const { addStudent, deleteByIndex } = this;
  
    return (
      <div className="App">
        <div className="container">
          <h1>Estudantes</h1>
          <StudentForm addStudent={addStudent} />
          <StudentList deleteByIndex={deleteByIndex} students={students} />
        </div>
      </div>
    );
  }
}

export default App;
