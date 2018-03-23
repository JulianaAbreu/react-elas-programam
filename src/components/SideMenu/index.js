import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faGraduationCap } from '@fortawesome/fontawesome-free-solid';
import { faListUl } from '@fortawesome/fontawesome-free-solid';
import {faMale} from '@fortawesome/fontawesome-free-solid'
import {faBuilding} from '@fortawesome/fontawesome-free-solid';

import "./style.css";

class SideMenu extends React.Component {
  state = {
    itemsMenu: [
      {
        image: faGraduationCap,
        name: 'Estudantes'
      },
      {
        image: faMale,
        name: 'Professores'
      },
      {
        image: faBuilding,
        name: 'Salas'
      },
      {
        image: faListUl,
        name: 'Matérias'
      }
    ]
  };

  render() {
    const { itemsMenu } = this.state;

    return (
      <div className="menu-left">
        <div className="logo">LearnIt</div>
        {itemsMenu.map((item, index) => (
          <div className="side-menu" key={index} onClick={this.onCLickOption}>
            <span className="ic-option">
              {' '}
              <FontAwesomeIcon icon={item.image}  className={itemsMenu[0] ? 'green': ''}/>{' '}
            </span>
            <span className="name-option"> {item.name} </span>
          </div>
        ))}
      </div>
    );
  }
}

export default SideMenu;
