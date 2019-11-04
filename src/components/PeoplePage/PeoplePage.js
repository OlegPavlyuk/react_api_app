import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import Row from '../Row';

import './PeoplePage.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getData}
        renderItem={({ name, gender }) => `${name}, ${gender}`}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
