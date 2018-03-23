import React, { Component } from "react";
import "./style.css";

class StudentForm extends Component {
  state = {
    student: {
      nome: '',
      matricula: '',
      serie: '',
      rg: ''
    }
  }
  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.addStudent(this.state.student);
    this.setState({
      student: {
        nome: '',
        matricula: '',
        serie: '',
        rg: ''
      }
    });
  }
  onChange = (ev) => {
    this.setState({
      student: {
        ...this.state.student,
        [ev.target.getAttribute('name')]: ev.target.value
      }
    });
  }
  render() {
    const { nome,matricula,serie,rg } = this.state.student;
    return (
      <div className="card row -justify-center -align-center StudentForm">
        <form className="row" onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Nome</label>
            <input type="text" name="nome" value={nome} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Matrícula</label>
            <input type="text" name="matricula" value={matricula} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Série</label>
            <input type="text" name="serie" value={serie} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>RG</label>
            <input type="text" name="rg" value={rg} onChange={this.onChange} />
          </div>
            <button className="btn">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
