import React, { Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import PageHeader from "@atlaskit/page-header";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";

import CardPreview from "./CardPreview";
import Profile from "./Profile";

import axios from "axios";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      showProfileModal: false,
      profile: null
    };
  }
  cardSelectionHandler = teammate => {
    console.log("Team cardSelectionHandler : ", teammate.id);
    /*let show = this.state.showProfileModal;
    if (teammate.id === this.state.profile.id || show) {
      this.setState({ showProfileModal: !show });
    } else {
      this.setState({ showProfileModal: !show, profile: teammate });
    }*/
    let show = this.state.showProfileModal;
    !show || teammate.id !== this.state.profile.id
      ? this.setState({ showProfileModal: !show, profile: teammate })
      : this.setState({ showProfileModal: !show });
  };
  componentDidMount() {
    //load data from JSON placeholder and assign to state
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data)
      .then(json => this.setState({ team: [...json] }));
  }

  render() {
    return (
      <Page>
        <PageHeader>Team</PageHeader>
        {this.state.team.map(person => {
          return (
            <CardPreview
              member={person}
              onCardSelection={this.cardSelectionHandler}
            />
          );
        })}
        <ModalTransition>
          {this.state.showProfileModal && (
            <Modal
              heading={this.state.profile.name + "'s Tasks "}
              onClose={this.cardSelectionHandler}
            >
              <Profile details={this.state.profile} />
            </Modal>
          )}
        </ModalTransition>
      </Page>
    );
  }
}

export default Team;
