import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "../Input/input.css";
const InputValue = function () {
  const [todo, setTodo] = useState([]); //get method
  const [newTask, setNewtask] = useState(""); //post method

  useEffect(() => {
    const fetchData = async function () {
      await axios
        .get("http://localhost:8000/read")
        .then((arr) => setTodo(arr.data));
    };
    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/data", { todo: newTask })
      .then((arr) => setTodo(arr.data));

    set;
  };
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((arr) => setTodo(arr.data));
  };
  return (
    <Fragment>
      <div className="input_data">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="add your work here..."
            value={newTask}
            onChange={(e) => setNewtask(e.target.value)}
          />
          <button type="submit" value="Submit">
            +Add
          </button>
        </form>
      </div>
      <div className="ui">
        <ul>
          {todo.map((task) => (
            <li key={task._id}>
              {task.todo}
              <button
                className="delete"
                onClick={() => deleteHandler(task._id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default InputValue;
