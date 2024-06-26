import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";
import {CreateTodoButton} from '../CreateTodoButton';

function TodoForm({ setIsFocused }) {
    const {
        addTodo,
        setOpenModal,
    } 
    = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setIsFocused(false);
    };
    const onCancel = () => {
        setIsFocused(false);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="TodoForm-container"
            onFocus={() => setIsFocused(true)}
            >
            <label className="TodoForm-label">Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        onSubmit(event);
                    }
                }}
                required
                className="TodoForm-textArea"
                placeholder="comprar verduras"
                autoFocus
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    >Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };