import React, { Component } from 'react';
import styles from './App.module.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  search = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m => 
      m.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className={styles.App}>
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.search} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
