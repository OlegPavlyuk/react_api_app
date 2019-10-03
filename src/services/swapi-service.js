export default class SwapiService {
  baseUrl = 'https://swapi.co/api';

  async getResource(url) {
    const response = await fetch(`${this.baseUrl}${url}`);

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}, recieved:${response.status}`
      );
    }

    return await response.json();
  }

  async getAllPeople() {
    const response = await this.getResource('/people/');
    return response.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const response = await this.getResource('/starships/');
    return response.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}
