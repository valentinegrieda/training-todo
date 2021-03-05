import React from 'react';
import '../App.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import Moment from 'react-moment';



function ListTodo({todo, completeTodo, deleteTodo}){

    return(
        <div className="todo-list item-list mb-3">
        {todo.map(item => (
          <div className="todo-item col media py-3" key={item.id}>
            <div className="mr-3">
              <button 
                className="todo-delete btn btn-sm btn-danger"
                onClick={() => deleteTodo(item.id)}>
                <FaRegTrashAlt /></button>
            </div>
            <div className="mr-3">
              
              <button 
                disabled={item.status === "Complete" ? "true" : ""}
                className="todo-delete btn btn-sm btn-warning" 
                onClick={() => completeTodo(item.id, item)}
              >
              Complete
              </button>
            </div>

            <div className="todo-info media-body">
              <div className="todo-head d-flex">
                <span className="todo-name" style={{ textDecoration: item.status === "Complete" ? "line-through" : "" }}>{item.thing_todo}</span>
                <span className="todo-date ml-auto">{item.date_todo} {item.time_todo}</span>
              </div>

              
            </div>
          </div>
        ))}
      </div>
    );
   
}

export default ListTodo;