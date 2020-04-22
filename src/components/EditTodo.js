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
      <div className="col-sm-12 my-auto">
      <div className='col-sm-12 h-100 d-table'>
      <div className="card-container col-md-12 text-center card card-block " style={{ height: '40vh' }}>
        <h3>Edit form</h3>
        <form  className="form-group col-sm-12 d-table" onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            className="form-control px-3" id="formGroupExampleInput"
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label>Body:</label>
          <textarea
             className="form-control" id="formGroupExampleInput"
            name="body"
            value={this.state.body}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    </div>
    );
  }
}

export default EditTodo