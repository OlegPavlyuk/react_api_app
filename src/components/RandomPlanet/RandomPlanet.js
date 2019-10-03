import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <article className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/3.jpg`}
        />
        <section>
          <h4>Jupiter</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>10000000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>320</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>45000</span>
            </li>
          </ul>
        </section>
      </article>
    );
  }
}
