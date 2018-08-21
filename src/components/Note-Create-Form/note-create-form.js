import React, { Component } from 'react';

export default class NoteCreateForm extends Component {

  render() {
    const { onComplete, handleContentChange, handleTitleChange } = this.props;
    return (
      <form className='note_input_form' onSubmit={onComplete}>
        <div className='input_area'>
          <input
            type='text'
            placeholder='title'
            onChange={handleTitleChange}
          />
          <textarea
            type='text'
            cols='20'
            rows='20'
            placeholder='note'
            onChange={handleContentChange}
          />
          <button type='submit'>Make Some Music!</button>
        </div>
      </form>
    );
  }
}