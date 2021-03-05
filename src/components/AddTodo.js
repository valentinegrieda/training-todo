import React, { useState, useEffect } from 'react';
import '../App.css';

function AddTodo({ addTodo }) {

    const mainVar = { id: null, thing_todo: '', date_todo: '', time_todo: '', status: 'not complete' }
	
    const [data,setData] = useState([]);
  
    const handleInputChange = event => {
		const { name, value } = event.target

		setData({ ...data, [name]: value })
	}
  
    return (
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       className="input"
    //       value={value}
    //       onChange={e => setValue(e.target.value)}
    //     />
    //   </form>
    <div className="add-section">
        <h3>Add To Do</h3>
        
        <hr className="divider-top"></hr>
        <form onSubmit={event => {
				event.preventDefault()
				if (!data.thing_todo || !data.date_todo || !data.time_todo) return

				addTodo(data)
				setData(mainVar)
			}}>

        <div className="form-group row"> 
        <div className="col-2"></div>
        <div className="col-10">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Insert to do" 
                name="thing_todo" 
                value={data.thing_todo} 
                onChange={handleInputChange}
            />
        </div>
        </div>

        <div class="form-group row">
        <div className="col-2"></div>
        <label for="example-date-input" className="col-2 col-form-label">Date</label>
        <div className="col-8">
            <input 
                type="date" 
                className="form-control" 
                name="date_todo" 
                value={data.date_todo} 
                onChange={handleInputChange}
            />
        </div>
        </div>

        <div class="form-group row">
        <div className="col-2"></div>
        <label for="example-date-input" className="col-2 col-form-label">Time</label>
        <div className="col-8">
            <input 
                type="time" 
                className="form-control" 
                name="time_todo" 
                value={data.time_todo} 
                onChange={handleInputChange}
            />
        </div>
        </div>
        
        <div className="form-group row">
        <div className="col-10"></div>
        <div className="col-2">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
        
        
        
        </form>
        <hr className="divider-top"></hr>
    </div>
    );
  }

export default AddTodo;