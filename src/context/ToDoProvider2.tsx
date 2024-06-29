import { ReactNode, createContext } from "react";

// Define the type for the context value
type ToDoContextType = {
  todoTitle: string;
};

// Provide a default value for the context
const defaultValue: ToDoContextType = {
  todoTitle: "",
};

export const ToDoContext2 = createContext<ToDoContextType>(defaultValue);

type TodoProviderProps = { children: ReactNode };

const ToDoProvider = ({ children }: TodoProviderProps) => {
  const values: ToDoContextType = {
    todoTitle: "Cook Rice",
  };

  return (
    <ToDoContext2.Provider value={values}>{children}</ToDoContext2.Provider>
  );
};

export default ToDoProvider;
