import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../Note-Create-Form/note-create-form';
import NoteList from '../Note-List/note-list';
// import NoteItem from '../Note-Item/note-item';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: '',
      title: '',
      content: '',
      editing: false,
      completed: false,
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNote(note) {
    note.id = uuid(),
    note.editing = false,
    note.completed = false,
    note.title = this.state.title,
    note.content = this.state.content,

    console.log(note);

    this.setState({
      notes: [...this.state.notes, note],
    });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  removeNote(event) {
    console.log('remove note', this.state.notes);
    let filteredNotes = this.state.notes.filter(note => {
      if (event.target.id !== note.id) {
        return note;
      }

  handleUdateForm(event) {
    this.setState({ content: event.target.value });
      }

    });
    this.setState({
      notes: filteredNotes,
    });
    console.log(filteredNotes, 'filtered');
    console.log(event.target.id, 'id');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNote();
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    console.log(this.state, 'state');
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <NoteCreateForm
          onComplete={this.handleSubmit}
          handleContentChange={this.handleContentChange}
          handleTitleChange={this.handleTitleChange} />
        <NoteList
          notes={this.state.notes}
          removeNote={this.removeNote} />
        <NoteUpdateForm
          onComplete={this.handleSubmit}
          handleContentChange={this.handleContentChange}
          handleTitleChange={this.handleTitleChange} />
      </Fragment>
    );

  }
}
