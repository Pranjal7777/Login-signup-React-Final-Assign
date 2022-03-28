import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AddToToDo } from "./addTodo";
import { ShowTodoList } from "./showTodo";

export const TodoDiv = () => {
  const { auth } = useSelector((store) => store.auth);

  useEffect(() => {
    if (auth === "") {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <AddToToDo />
      <ShowTodoList />
    </div>
  );
};
