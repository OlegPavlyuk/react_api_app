import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  state = {
    person: null,
    loading: false
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(person => this.setState({ person, loading: false }));
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const {
      id,
      name,
      gender,
      birthYear,
      eyeColor
    } = this.state.person;

    const { loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Person"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
