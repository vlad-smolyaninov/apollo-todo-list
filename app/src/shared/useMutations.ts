import {gql, useQuery, useMutation} from "@apollo/client";
import {UPDATE_TODO, ADD_TODO, GET_TODO, REMOVE_TODO} from './queries';
import { ToDo } from "./types";

export default () => {
    const {data} = useQuery(GET_TODO);
    const list:ToDo[] = data && data.getAllTodos || [];

    const [addTodoMutation] = useMutation(ADD_TODO, {
        update(cache, {data: {addTodo: newItem}}) {
            cache.modify({
                fields: {
                    getAllTodos(existingTodos = []) {
                        const newTodoRef = cache.writeFragment({
                            data: newItem,
                            fragment: gql`
                                fragment NewTodo on Todo {
                                  id
                                  title
                                  completed
                                }
                            `
                        });
                        return [newTodoRef, ...existingTodos];
                    }
                }
            });
        }
    });

    const [removeTodoMutation] = useMutation(REMOVE_TODO, {
        update(cache, {data: {removeTodo: updated}}) {
            cache.modify({
                fields: {
                    getAllTodos() {
                        return [...updated];
                    }
                }
            });
        }
    });

    const [updateTodoMutation] = useMutation(UPDATE_TODO, {
        update(cache, {data: {updateTodo: updated}}) {
            cache.modify({
                fields: {
                    getAllTodos() {
                        return [...updated];
                    }
                }
            });
        }
    });

    return {
        list,
        updateTodoMutation,
        removeTodoMutation,
        addTodoMutation,
    }
}