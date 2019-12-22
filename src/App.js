import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import SideMenu from './SideMenu';
import EmployeeList from './EmployeeList';
import Navigation from './Navigation';
import './fonts/Roboto-Regular.ttf'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faEnvelope, faTrashAlt, faPencilAlt, faBell, faLongArrowAltUp, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faEnvelope, faTrashAlt, faPencilAlt, faBell, faLongArrowAltUp, faLongArrowAltDown) 

class App extends Component {

  state = {
    characters: [],

    
  }

  componentDidMount() {
    const url =
      'https://api.github.com/users?per_page=7'

    fetch(url)
      .then(rows => rows.json())
      .then(rows => {
        this.setState({
          characters: rows,
        })
      })
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