import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useState } from "react";
import List from "./list";
import "./todo.css";

function Todo({ todos, checkTodo, deleteTodo, updateTodo, deleteAllTodo }) {
  const titles = ["All", "Active", "Completed"];
  const [tabValue, setTabValue] = useState("All");
  const deleteAll = () => {
    deleteAllTodo();
    setOpen(false);
  };

  const [Open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item xs={12} className="tab-grid">
        <Tabs
          value={tabValue}
          className="custom=tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          {titles.map((title) => (
            <Tab
              key={title}
              label={title}
              value={title}
              className={
                tabValue === title ? "custom_tabitem active" : "custom_tabitem"
              }
            />
          ))}
        </Tabs>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          startIcon={<Delete />}
        >
          Delete All
        </Button>
      </Grid>
      <Grid item xs={12}>
        {todos.map((todo) => (
          <>
            {todo.isCompleted === true && tabValue === "Completed" ? (
              <List
                key={todo.id}
                checkTodo={checkTodo}
                title={todo.title}
                isCompleted={todo.isCompleted}
                id={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ) : todo.isCompleted === false && tabValue === "Active" ? (
              <List
                key={todo.id}
                checkTodo={checkTodo}
                title={todo.title}
                isCompleted={todo.isCompleted}
                id={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ) : tabValue === "All" ? (
              <List
                key={todo.id}
                checkTodo={checkTodo}
                title={todo.title}
                isCompleted={todo.isCompleted}
                id={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ) : null}
          </>
        ))}
      </Grid>
      <Dialog
        open={Open}
        TransitionComponent={Grow}
        transitionDuration={500}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete all todos?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete all todos.?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={deleteAll} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Todo;
