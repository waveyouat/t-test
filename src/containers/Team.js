import React, { Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import PageHeader from "@atlaskit/page-header";
import CardPreview from "./CardPreview";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    };
  }
  componentDidMount() {
    //load data from JSON placeholder and assign to state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ team: [...json] }));
  }
  render() {
    return (
      <Page>
        <PageHeader>Team</PageHeader>
        {this.state.team.map(person => {
          return <CardPreview member={person} />;
        })}
      </Page>
    );
  }
}

export default Team;
