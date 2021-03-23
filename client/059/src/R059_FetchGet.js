import React, { Component } from 'react';

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch('https://api.androidhive.info/contacts/');
    const body = await response.json();
    alert(body.contacts)
  }

  render() {
    return (
        <h1>fetch get</h1>
    )
  }
}

export default R059_FetchGet;
