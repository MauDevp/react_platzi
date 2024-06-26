import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoWraper } from "../TodoWraper";
import { TodosLoading } from "../TodosLoading";
import { TodosLoadingCounter } from "../TodosLoadingCounter";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { EmptyTodosCounter } from "../EmptyTodosCounter";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    error,
    loading,
    openModal,
    setOpenModal,
    deleteTodos,
  } = React.useContext(TodoContext);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <>
      <TodoWraper>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading &&
            <>
              <TodosLoading />
              <TodosLoadingCounter />
            </>
          }
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) &&
            <>
              <EmptyTodos />
              <EmptyTodosCounter />
            </>
          }
          {searchedTodos.map((todos) => (
            <TodoItem
              key={todos.text}
              text={todos.text}
              completed={todos.completed}
              onComplete={() => completeTodo(todos.text)}
              onDelete={() => deleteTodo(todos.text)}
            />
          ))}
        </TodoList>
        {!isFocused && 
          <CreateTodoButton />
        }
        {openModal && (
          <Modal>
            <TodoForm setIsFocused={setIsFocused}/>
          </Modal>
        )}
      </TodoWraper>
    </>
  );
}

export { AppUI };
