import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';



function App() {
  const varFirst = { id: null, thing_todo: '', date_todo: '', time_todo: ''}
  const [data,setData]=useState([])
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

//   const listitems = data.map((data, key) => (
//     <div key={key}>
//         <h5>{data.thing_todo}</h5>
//         <p>{data.date_todo}</p>
//         <p>{data.time_todo}</p>
//         <br />
//         <br />
//     </div>
    
// ));

const lastRow = data[data.length -1]

//alert('am the last row id:' +lastRow.id);

const addTodo = todo => {
  todo.id = lastRow.id + 1
  setData([ ...data, todo ])
}

const completeTodo = (id, updatedData) => {
  let status_val="Complete";
  if(updatedData.status === "not complete"){
    status_val="Complete";
  }
  
  const new_value = { id: updatedData.id, thing_todo: updatedData.thing_todo, date_todo: updatedData.date_todo, time_todo: updatedData.time_todo, status: status_val }
  setData(data.map(todo => (todo.id === id ? new_value : todo)))
}

const deleteTodo = id => {
  setData(data.filter(todo => todo.id !== id))
}

  return (
    <div className="App">
      <div className="bodycontainer">
        <AddTodo addTodo = {addTodo}/>
        <ListTodo 
          todo = {data}
          completeTodo = {completeTodo}
          deleteTodo = {deleteTodo}/>
        <br/>
        
      </div>
      
    </div>
  );
}

export default App;
