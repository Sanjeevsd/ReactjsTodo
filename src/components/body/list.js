import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { Check, Delete, Edit } from "@material-ui/icons";
import "./list.css";
function List({ checkTodo, title, isCompleted, id, deleteTodo, updateTodo }) {
  const markComplete = () => {
    checkTodo(id);
  };

  const [Open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newtitle, setnewtitle] = useState(title);
  const editTodo = () => {
    updateTodo(id, newtitle);
    setOpen(false);
  };
  const todoDelete = () => deleteTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  const checkIcon = isCompleted ? { color: "green" } : { color: "gray" };
  return (
    <Container className="list-container">
      <Grow in timeout={1000}>
        <Card className="list-card" variant="outlined">
          <CardContent className="content-card">
            <Typography variant="h5" component="h3" style={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check style={checkIcon} />
              </IconButton>
              {title}

              <IconButton style={{ float: "right" }} onClick={todoDelete}>
                <Delete style={{ color: "red" }} />
              </IconButton>
              <IconButton style={{ float: "right" }} onClick={handleClickOpen}>
                <Edit style={{ color: "blue" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Grow>

      <Dialog
        TransitionComponent={Grow}
        transitionDuration={500}
        open={Open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the todo or provide new todo title for this item.
          </DialogContentText>
          <TextField
            autoFocus
            value={newtitle}
            onChange={(e) => setnewtitle(e.target.value)}
            margin="dense"
            id="name"
            label="Task"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editTodo} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default List;
