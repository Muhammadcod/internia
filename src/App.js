import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import SideMenu from './SideMenu';
import EmployeeList from './EmployeeList';
import Navigation from './Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faEnvelope, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faEnvelope, faTrashAlt)

class App extends Component {

  state = {
    characters: [
      {
        
        employee: 'Charlie',
        salary: 'Janitor' ,
        status: 'Janitor',
        manage: '  ',
      },
      {
        input: '',
        employee: 'Charlie',
        salary: 'Janitor',
        status: 'Janitor',
        manage: '  ',
      },
      {
        input: '',
        employee: 'Charlie',
        salary: 'Janitor',
        status: 'Janitor',
        manage: ' | ',
      },
      {
        input: ' ',
        employee: 'Charlie',
        salary: 'Janitor',
        status: 'Janitor',
        manage: '  ',
      },
      {
        input: ' ',
        employee: 'Charlie',
        salary: 'Janitor',
        status: 'Janitor',
        manage: ' | ',
      },
      {
      
        employee: 'Charlie',
        salary: 'Janitor',
        status: 'Janitor',
        manage: ' | ',
      },
    ],

    
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
  })
}
editCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
})
}

  render () {
    const { characters } = this.state

    return (
      <div className="App  bg-light">
        <Navigation className="App-nav" />
        <SideMenu className="App-menu" />
        <EmployeeList characterData={characters} removeCharacter = 
        {this.removeCharacter}  className="App-header"/>
      </div>
    );
  }
  
}

export default App;