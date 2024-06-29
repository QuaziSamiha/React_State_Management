import { ReactNode, createContext } from "react";

export const ToDoContext = createContext(undefined);

type TodoProviderProps = { children: ReactNode };

const ToDoProvider = ({ children }: TodoProviderProps) => {
  const values = {
    todoTitle: "Cook Rice",
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
