import React, {useState} from 'react';
import useMutations from "@shared/useMutations";

const App = () => {
    const {
        list,
        updateTodoMutation,
        removeTodoMutation,
        addTodoMutation,
    } = useMutations();

    const [newTitle, onInput] = useState('');

    return (
        <main className="App">
            <h3>ToDo list: </h3>
            <hr/>
            <label>
                Add new:
                <input type="text" name="newTitle" value={newTitle} onChange={(e) => onInput(e.target.value)}/>
            </label>
            <button onClick={() => addTodoMutation({variables: {todo: {title: newTitle}}})}>Add</button>
            <hr/>
            {list && !!list.length && list.map((item) => (
                <section key={item.id}>
                    <label>
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => updateTodoMutation({variables: {id: item.id}})}/>
                        {item.title}
                    </label>
                    <button onClick={() => removeTodoMutation({variables: {id: item.id}})}>x</button>
                </section>))
            }
        </main>
    );
}

export default App;
