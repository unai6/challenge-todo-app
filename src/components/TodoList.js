import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import CreateTodo from './CreateTodo'
import {Link} from 'react-router-dom'


const TodoList = () => {
    
    const[todos, setTodos] = useState([])
    const [updateState, setUpdateState] = useState(true);

    useEffect(()=> {
      axios.get('http://localhost:4000/api/v1/todos').then((responseFromApi) => {
            setTodos(responseFromApi.data)
        })
        
    }, [updateState]);
    
    const delete_todo = (id) => {
       axios.delete(`http://localhost:4000/api/v1/todos/${id}`).then((responseFromAPI) => {
          // console.log(responseFromAPI)
    
          setUpdateState(!updateState);
        });
      };


    console.log(todos)

    
    
    
    return (
        <div>
            <h1> Todos List</h1>
                <div>{todos.map((item,index) => {
                    return (
                        <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                        <button onClick={() =>
                                delete_todo(item._id)
                              }> Delete Todo
                              
                        </button>
                      <Link to={`/todos/${item._id}`}><button>
                            Edit Todo
                        </button>
                        </Link>  
                        </div>
                       
                       
                    )   
                })}
                </div>
                <div>
                    <h4>Create new Todo</h4>
                <CreateTodo/>
                </div>
            
        
        </div>
    )
}

export default TodoList