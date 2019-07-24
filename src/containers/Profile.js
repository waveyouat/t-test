import React, { useState, useEffect } from "react";
import Task from "../components/Task";

import axios from "axios";

export default function Profile(props) {
  let [user, setUser] = useState({});
  let [posts, setPosts] = useState([]);
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${props.details.id}`
      )
      .then(response => response.data)
      .then(json => setPosts([...json]));
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?userId=${props.details.id}`
      )
      .then(response => response.data)
      .then(json => setTodos([...json]));

    setUser({ posts: props.details.id });
  });
  return (
    <div>
      {todos.map(task => (
        <Task key={task.id} title={task.title} completed={task.completed} />
      ))}
      <div>Calendar</div>
      <div>Progress</div>
      <div>Previous Work</div>
      Profile {props.details.id}
      Posts {posts.length}
      Todos {todos.length}
    </div>
  );
}
