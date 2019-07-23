import React from "react";

export default function CardPreview(props) {
  return (
    <div key={props.member.id}>
      {props.member.name}
      <br />
      {props.member.company.name}
      <br />
      {props.member.company.catchPhrase}
      <br />
      {props.member.company.bs}
      <br />
    </div>
  );
}
