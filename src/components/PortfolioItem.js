import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  background: #fea;
  margin: 4px;
  padding: 8px;
  border: solid 1px grey;
  cursor: pointer;
  &:hover {
    background: lightcoral;
  }
`;

export default function PortfolioItem(props) {
  return <Tile>{props.title}</Tile>;
}
