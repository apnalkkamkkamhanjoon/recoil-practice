import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./selecter/filteredTodoListState";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";
import TodoListFilters from "./todoListFilters";
import TodoListStates from "./todoListStates";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStates />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
