import { useContext } from "react";
import { ToDoContext3 } from "../../context/ToDoProvider3";

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext3);
  console.log(state);
  return (
    <div className="m-6 border border-purple-600 p-8 w-1/2 rounded-lg shadow-lg shadow-purple-400">
      {state.map((item: TTodo) => (
        <li
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
          className={`${
            item.isCompleted ? "line-through" : ""
          } cursor-pointer text-orange-600 font-medium`}
        >
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
