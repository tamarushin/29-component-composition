import React from 'react';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',

    };
//??
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('test');

    this.props.note.title = this.state.title;
    this.props.note.content = this.state.content;

    this.props.close();
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className='note_input_form' onSubmit={this.handleSubmit}>
        <div className='input_area'>
          <input
            type='text'
            name='title'
            placeholder={this.props.note.title}
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='content'
            placeholder={this.props.note.content}
            value={this.state.content}
            onChange={this.handleChange}
          />
        </div>
        <button className='submit_btn' type='submit'> update Note</button>
      </form>
    );
  }
}

