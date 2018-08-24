import React, { Component } from 'react';

export default class NoteItem extends Component {
  constructor (props) {
    super (props);
  }
  render() {
    return (
      <p>{this.props.note.content}</p>
    );
  }
}

