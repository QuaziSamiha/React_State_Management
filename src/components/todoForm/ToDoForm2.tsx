import { useContext } from "react";
import { ToDoContext2 } from "../../context/ToDoProvider2";

const ToDoForm2 = () => {
  const { todoTitle } = useContext(ToDoContext2);
  console.log(todoTitle);
  return <div></div>;
};

export default ToDoForm2;
