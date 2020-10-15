<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> d6d9be4
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

<<<<<<< HEAD
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
=======
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        setRobots(users);
      });
      console.log(count)
  },[count]) // only run if count changes.

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

>>>>>>> d6d9be4
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
<<<<<<< HEAD
=======
          <button onClick={()=>setCount(count+1)}>Click Me!</button>
>>>>>>> d6d9be4
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
<<<<<<< HEAD
  }

=======
    }
>>>>>>> d6d9be4
}

export default connect(mapStateToProps, mapDispatchToProps)(App);