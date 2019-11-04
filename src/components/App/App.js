import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorIndicator from '../ErrorIndicator';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/swapi-service';

import './App.css';

export default class App extends Component {
  state = {
    hasError: false
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <AppHeader />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
