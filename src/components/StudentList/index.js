import React, { Component } from 'react';
import axios from 'axios';
import StudentRow from '../StudentRow';
import './style.css';


class StudentList extends Component {

  render() {
    const {students, deleteByIndex} = this.props; 
    return (
      <div className="card StudentList">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Série</th>
              <th>RG</th>
            </tr>
          </thead>
          <tbody>
            {students.map( (student, index) => (
              <StudentRow
                nome={student.nome}
                matricula={student.matricula}
                serie={student.serie}
                rg={student.rg}
                key={student.rg}
                index={index} 
                deleteByIndex={deleteByIndex} 
              />
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
