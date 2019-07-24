import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import FieldText, { FieldTextStateless } from "@atlaskit/field-text";
import Button from "@atlaskit/button";
import axios from "axios";

export default function Profile(props) {
  let [user, setUser] = useState({});
  let [taskPosted, setTaskPosted] = useState(false);
  let [fromServer, setFromServer] = useState({});
  let [todos, setTodos] = useState([]);
  let [newTaskMessage, setNewTaskMessage] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?userId=${props.details.id}`
      )
      .then(response => response.data)
      .then(json => setTodos([...json]));

    setUser({ posts: props.details.id });
  }, [props.details.id, taskPosted]);
  function inputShell(e) {
    setNewTaskMessage(e.target.value);
    console.log(e.target.value);
  }
  function addNewTask() {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: props.details.id,
        title: newTaskMessage,
        completed: false
      })
      .then(response => {
        console.log(response);
        setTaskPosted(true);
        setFromServer(response.data);
        setNewTaskMessage("");
      });
  }
  let notification = fromServer.id ? (
    <div>
      {newTaskMessage} posted for {props.details.name}, task id from the server:
      {JSON.stringify(fromServer.id)}
      <br />
      Raw response: {JSON.stringify(fromServer)}
    </div>
  ) : (
    <div>Loading...</div>
  );
  return (
    <div>
      {taskPosted ? notification : null}
      <FieldText
        label="Add new task"
        onChange={inputShell}
        value={newTaskMessage}
      />
      <Button appearance="primary" onClick={addNewTask}>
        Add
      </Button>
      {todos.map(task => (
        <Task key={task.id} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
}
