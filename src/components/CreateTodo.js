
import axios from 'axios'
import React, {Component} from 'react'


class Addproject extends Component  {
    constructor(){
    super();
        this.state = {
        title: '',
        body: ''
    }
} 

    handleFormSubmit = async (event) => {

       event.preventDefault();
       const {title, body} = this.state;

        try{

       await axios.post("http://localhost:4000/api/v1/todos", {title, body})

        this.setState({
            title:'',
            body:''
           })

        } catch (error){
            console.log(error)
        }         
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value 
        })
    }
    

    render(){
    return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type ='text' name='title' value={this.state.title} onChange={e => this.handleChange(e)} />
            <label>Body:</label>
            <textarea
               name='body' value={this.state.body} onChange={e => this.handleChange(e)}
            />
            <input type='submit' value='Submit'/>

            </form>
        </div>
        )
    }
}

export default Addproject
