import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

import './PeoplePage.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
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

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
