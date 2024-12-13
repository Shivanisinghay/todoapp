import { apiClient } from './ApiClient'

//export const retrieveUsersPathVariable
//= (username, token) => apiClient.get(`/users/${username}`,{
//    headers: {
//        Authorization: token
//    }
//})

export const executeBasicAuthenticationService
= (token) => apiClient.get('/basicauth',{
    headers: {
        Authorization: token
    }
})

export const retrieveAllTodosForUsernameApi
= (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodoApi 
= (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodoApi 
= (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi 
= (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const addNewTodoApi 
= (username, todo) => apiClient.put(`/users/${username}/todos`, todo)