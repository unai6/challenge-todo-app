
import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import EditTodo from './EditTodo';


class TodoID extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getOneToDo();
    }


    getOneToDo = () => {
        const { params } = this.props.match;
        axios.get(`http://localhost:4000/api/v1/todos/${params.id}`).then(responseFromApi => {
            const toDo = responseFromApi.data;
            this.setState(toDo);
        })
            .catch(err => {
                console.log(err);
            });
    };


    editForm = () => {
        if (!this.state.title) {
            this.getOneToDo();
        } else {
            return <EditTodo toDo={this.state} getTodo={this.getOneToDo} {...this.props} />
        }
    }
  
    render() {  
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                
                <div>{this.editForm()} </div>
                <br />
                

                

                <Link to={'/allTodos'}>Back to Todos</Link>
            </div>
        )
    }
}

export default TodoID;