import React, { Component } from 'react'
import axios from 'axios'

 class EditTodo extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      title: this.props.toDo.title,
      body: this.props.toDo.body
    };
  }

  handleFormSubmit = event => {
      event.preventDefault();
    const {title, body} = this.state

    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.toDo._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.getTodo();   
        this.props.history.push("/allTodos");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const {name, value} = event.target

    this.setState({
        [name]: value 
    })
}



  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label>body:</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditTodo