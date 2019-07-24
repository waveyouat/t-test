import React from "react";
import Avatar from "@atlaskit/avatar";
import styled from "styled-components";

const Box = styled.div`
  background: #fea;
  margin: 4px;
  padding: 8px;
  border: solid 1px grey;
  cursor: pointer;
  &:hover {
    background: lightcoral;
  }
`;

export default function CardPreview(props) {
  return (
    <Box
      key={props.member.id}
      onClick={() => props.onCardSelection(props.member)}
    >
      <Avatar />
      <br />
      {props.member.name}
      <br />
      {props.member.website}
      <br />
      {props.member.company.name}
      <br />
      {props.member.company.catchPhrase}
      <br />
      {props.member.company.bs}
      <br />
    </Box>
  );
}
