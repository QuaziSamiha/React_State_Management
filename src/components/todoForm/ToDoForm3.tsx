import { FormEvent, useContext, useState } from "react";
import { ToDoContext3 } from "../../context/ToDoProvider3";

const ToDoForm3 = () => {
  const { state, dispatch } = useContext(ToDoContext3);
  console.log(state);

  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    console.log(todo);
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="m-6 border border-blue-600 p-8">
      <h1 className="my-2 font-semibold text-red-900">Add To Do:</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-8 rounded-lg shadow-lg shadow-purple-400 "
      >
        <label htmlFor="Todo" className="font-medium text-sm text-purple-800">
          Task
        </label>
        <input
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          id="todoId"
          placeholder="Enter Item..."
          className="w-full block outline-none border border-pink-500 rounded my-1 p-2"
        />
        <button
          className="block outline-none w-full bg-purple-500 mt-2 font-semibold rounded p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDoForm3;
