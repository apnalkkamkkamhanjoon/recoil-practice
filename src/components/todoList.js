import React from "react";
import { atom, useRecoilValue } from "recoil";
import TodoItem from "./todoItem";
import TodoItemCreator from "./todoItemCreator";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
