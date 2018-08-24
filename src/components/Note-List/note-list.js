import React, { Component } from 'react';
import NoteItem from '../Note-Item/note-item';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('HOWDY', this.props.notes);
    return (
      this.props.notes.map(note => {
        <li key={note.id} id={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <NoteItem note={note}/> 
          {/* <button className='delete_btn' onClick={this.props.removeNote}>Delete</button> */}
        </li>;
      })
    );
  }
}