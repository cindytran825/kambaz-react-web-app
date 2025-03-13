// import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button, ListGroup } from "react-bootstrap";
export default function TodoItem({ todo }: {
  todo: { id: string; title: string }; 
})
{const dispatch = useDispatch();

        return (
                <ListGroup.Item key={todo.id} className="d-flex">
                  <div className="d-flex me-2 align-items-center">
                    {todo.title}
                  </div>
               
                    <Button 
                      onClick={() => dispatch(deleteTodo(todo.id))} 
                      className="btn btn-danger me-2"
                      id="wd-delete-todo-click"
                    > 
                      Delete 
                    </Button>
                    <Button 
                      onClick={() => dispatch(setTodo(todo))} 
                      className="btn btn-primary"
                      id="wd-set-todo-click"
                    > 
                      Edit 
                    </Button>
                
                </ListGroup.Item>
              );
            }
            