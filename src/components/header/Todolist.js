import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Container, FormControl, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import "./todolist.css";
function Todolist({ addTodo }) {
  const [inputText, setinputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputText);
    setinputText("");
  };
  return (
    <Container className="todo-list" maxWidth="sm">
      <form className="form" onSubmit={handleSubmit}>
        <FormControl className="formclass">
          <TextField
            className="input-text"
            label="New Task.."
            required={true}
            value={inputText}
            onChange={(e) => setinputText(e.target.value)}
          />
          <Button
            variant="contained"
            className="button-submit"
            type="submit"
            color="primary"
            startIcon={<Add />}
          >
            Add
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default Todolist;
