import React from "react";

import InlineMessage from "@atlaskit/inline-message";
import styled from "styled-components";

const Entry = styled.div`
  background: #fea;
  margin: 4px;
  padding: 8px;
  border: solid 1px grey;
  cursor: pointer;
  &:hover {
    background: lightcoral;
  }
`;
export default function Task(props) {
  return (
    <Entry>
      <InlineMessage
        type={props.completed ? "confirmation" : "info"}
        title="Task"
        secondaryText={props.title}
      />
      {props.title} <span>{props.completed ? "Done" : "Not yet"}</span>
      <button>check completed</button>
    </Entry>
  );
}
