// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, Form, FormControl, ListGroup } from "react-bootstrap";

export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <Form.Label className ="me-2"> 
     <FormControl
        defaultValue={todo.title}
        
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/> </Form.Label>
        <Button onClick={() => dispatch(addTodo(todo))}
                           className="btn btn-success me-2" id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
                          className="btn btn-warning me-2" id="wd-update-todo-click"> Update </Button>
    </ListGroup.Item>
);}
