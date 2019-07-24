import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import FieldText, { FieldTextStateless } from "@atlaskit/field-text";
import Button from "@atlaskit/button";
import PortfolioItem from "../components/PortfolioItem";
import axios from "axios";

export default function Profile(props) {
  let [user, setUser] = useState({});
  let [posts, setPosts] = useState([]);
  let [todos, setTodos] = useState([]);
  let [newTaskMessage, setNewTaskMessage] = useState([]);
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
      <h4>Tasks</h4>
      <FieldText
        label="Add new task"
        onChange={() => setNewTaskMessage(this.value)}
      />
      <Button appearance="primary">Add</Button>
      {todos.map(task => (
        <Task key={task.id} title={task.title} completed={task.completed} />
      ))}
      {/*<div>Calendar</div>
      <div>Progress</div>
      <div>Previous Work, Posts</div>
      {posts.map(post => (
        <PortfolioItem key={post.id} title={post.title} />
      ))}
      Profile {props.details.id}
      Posts {posts.length}
      Todos {todos.length}*/}
    </div>
  );
}
