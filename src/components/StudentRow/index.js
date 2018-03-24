import React from "react";
import "./style.css";

class StudentRow extends React.Component {
 
  render() {
    return (
      <tr>
    
        <td>
          <button className="btn-remove">×</button>
        </td>
      </tr>
    );
  }
}

export default StudentRow;
