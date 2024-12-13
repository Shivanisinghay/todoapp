import { useEffect, useState } from "react";
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TododApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {

    const [todos,setTodos] = useState([])

    const [message,setMessage] = useState(null)

    const authContext = useAuth()

    const navigate = useNavigate()

    const username =authContext.username

    /*const todos = [
        {id:1, description: 'Learn AWS',done:false,targetDate:targetDate},
        {id:2, description: 'Learn Full Stack Dev',done:false,targetDate:targetDate},
        {id:3, description: 'Learn DevOps',done:false,targetDate:targetDate},
    ] */

    useEffect(() => refreshTodos(),[])

    function refreshTodos(){

        retrieveAllTodosForUsernameApi(username)
        .then( response => {
            console.log(response)
            setTodos(response.data)
        }
        )
        .catch( error => console.log(error))
    }

    function addNewTodo() {
        navigate(`/todos/-1`)
    }

    function deleteTodo(id) {
        deleteTodoApi(username,id)
        .then(
            () => {
                setMessage(`Delete of todo with ${id} succesful`)
                refreshTodos()
            }
        )
        .catch( error => console.log(error))
    }

    function updateTodo(id) {
        navigate(`/todos/${id}`)
    }

    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetdate.toString()}</td>
                                    <td><button className="btn btn-warning" 
                                                    onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success"
                                                    onClick={() => updateTodo(todo.id)}>Update</button></td>                
                                </tr>    
                            )
                        )
                    }       
                    </tbody>
                </table>
                <div className="btn btn-success m-5" onClick={addNewTodo}>Add new Todo</div>
            </div>
        </div>
    )
}