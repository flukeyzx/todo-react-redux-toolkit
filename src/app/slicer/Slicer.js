import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const countSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todoToUpdate = state.todos.filter((todo) => {
        todo.id == action.payload;
      });
      todoToUpdate.text = action.payload.text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = countSlice.actions;

export default countSlice.reducer;
