import React from "react";
import "./style.css";

class StudentForm extends React.Component {
  
  
  render() {
    return (
      <div className="card row -justify-center -align-center StudentForm">
        <form className="row" >
          <div className="form-group">
            <label>Nome</label>
          </div>
            <button className="btn-add">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
