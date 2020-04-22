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
        <div className="col-sm-12 my-auto">
            <h1> Todos List</h1>
                <div>{todos.map((item,index) => {
                    return (
                        <div key={index}>
                        <p><span style={{fontWeight:'bold'}}>Title:</span> <br/>{item.title}</p> 
                        <p><span style={{fontWeight:'bold'}}>Body:</span><br/>{item.body}</p>
                        <button  className="btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3" onClick={() =>
                                delete_todo(item._id)
                              }> Delete Todo
                              
                        </button>
                        <p><input type='checkbox' />Done</p>
                      <Link to={`/todos/${item._id}`}><button className="btn btn-block text-uppercase text-light bg-dark  mt-3 mb-3">
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