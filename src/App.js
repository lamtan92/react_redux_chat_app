import React, { Component } from 'react';
import './App.css';
import mapDispatchToProps from './action';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.connect(window.location.pathname);
  }

  render() {
    console.log(this.props.connection)
    const channels = this.props.channels.channels.map((ch) => {
      return (
        <tr key={ch.url}><td>{ch.name}</td></tr>
      )
    })
    return (
      <div className="App">
        {
          !this.props.connection.connected ? 
          (<h1>Connecting...</h1>) :
          (<h1>Connected as {this.props.connection.user.userId}</h1>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
