import React, { ReactNode, createContext, useReducer } from "react";

// STEP-5 (FOR STEP-3)
type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

// STEP-6 (FOR STEP-4)
// ============================= reducer function argument type definition
type TAction = {
  // type: string;
  type: "addTodo" | "taskComplete";
  payload: TTodo | string;
};

const typeConstants = {
  ADD_TODO: "addTodo",
  TASK_COMPLETE: "taskComplete",
};

// STEP-7 (FOR STEP-1)
// ================== PROVIDER PROPS TYPE ==============
type TodoProviderProps = { children: ReactNode };

// ========================= CREATE CONTEXT ==================
export const ToDoContext3 = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

// STEP-3 (FOR STEP-2)
// ========================== useReducer hook initial state ==========================
const initialState: TTodo[] = []; // empty array

// STEP-4 (FOR STEP-2)
// ================================= reducer function ======================
const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];
    case typeConstants.TASK_COMPLETE:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currentState;
  }
};

// STEP-1 (MAKING A PROVIDER)
const ToDoProvider3 = ({ children }: TodoProviderProps) => {
  // STEP-2 (CREATING A REDUCER)
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  // we want to use this state, dispatch globally
  const values = {
    state,
    dispatch,
  };

  return (
    <ToDoContext3.Provider value={values}>{children}</ToDoContext3.Provider>
  );
};

export default ToDoProvider3;
