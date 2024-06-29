import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoForm = () => {
  const { todoTitle } = useContext(ToDoContext);
  console.log(todoTitle);
  return <div></div>;
};

export default ToDoForm;
