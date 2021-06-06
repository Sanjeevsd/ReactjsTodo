import "./App.css";
import React, { useState } from "react";
import Todolist from "./components/header/Todolist";
import { v4 as uuid } from "uuid";

import Todo from "./components/body/todo";
import { Grid } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
function App() {
  const [todos, settodos] = useState([]);
  const checkTodo = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    );
  };
  const updateTodo = (id, newtitle) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) todo.title = newtitle;
        return todo;
      })
    );
  };
  const deleteAllTodo = () => {
    settodos([]);
  };
  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      isCompleted: false,
    };
    settodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Grid container className="App">
        <Todolist addTodo={addTodo} />

        <Grid item xs={12} className="display-lists">
          <Todo
            todos={todos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            deleteAllTodo={deleteAllTodo}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
