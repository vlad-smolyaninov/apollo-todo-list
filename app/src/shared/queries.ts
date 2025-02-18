import {gql} from '@apollo/client';

export const GET_TODO = gql`
    {
        getAllTodos {
            id
            title
            completed
        }
    }
`;


export const ADD_TODO = gql`
  mutation AddTodo($todo: TodoInput) {
    addTodo(todo: $todo) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID) {
    updateTodo(id: $id) {
      id
      title
      completed
    }
  }
`;


export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID) {
    removeTodo(id: $id) {
      id
      title
      completed
    }
  }
`;
