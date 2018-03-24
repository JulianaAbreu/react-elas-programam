import React from 'react';
import StudentRow from '../StudentRow';
import './style.css';


class StudentList extends React.Component {

  render() {
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
              <StudentRow
                
              />
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
