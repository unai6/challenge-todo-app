import axios from "axios";

class apiService {
  constructor() {
    this.getTodos = axios.create({
      baseURL: process.env.PORT,
    });
  }
  get_allTodos() {
    return this.getTodos.get('/todos')
  }

  get_todo_(id) {
    return this.getTodos.get(`/todos/${id}`)
  }

  create_todo() {
    return this.getTodos.post('/todos')
  }

  update_todo(id) {
    return this.getTodos.put(`/todos/${id}`)
  }

  delete_todo(id) {
    return this.getTodos.delete(`/todos/${id}`)
  }


}

const ApiService = new apiService();
export default ApiService;