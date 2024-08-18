import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// =============== A SINGLE TODO TYPE DEFINITION ================
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

// ============= TYPE DEFINITION OF INITIAL STATE OF TODO SLICE ==========
type TInitialState = {
  todos: TTodo[];
};

// =========== INITIALIZED WITH AN EMPTY ARRAY OF INITIAL STATE =============
const initialState: TInitialState = {
  todos: [],
};

// ======================= CREATING SLICE ===================
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
