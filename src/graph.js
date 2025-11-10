// src/graph.js

/**
 * Graph module for BookingMx – handles nearby cities and their distances.
 * Used to display related destinations in the booking interface.
 */
class CityGraph {
  constructor() {
    // Each city is a node; connections (edges) hold distance values
    this.map = {}; // e.g., { 'Mexico City': { 'Puebla': 130, 'Toluca': 70 } }
  }

  addCity(city) {
    if (!city) throw new Error('City name cannot be empty.');
    if (!this.map[city]) this.map[city] = {};
  }

  addConnection(cityA, cityB, distanceKm) {
    if (!cityA || !cityB) throw new Error('City names must be valid.');
    if (distanceKm <= 0) throw new Error('Distance must be greater than zero.');
    this.addCity(cityA);
    this.addCity(cityB);
    this.map[cityA][cityB] = distanceKm;
    this.map[cityB][cityA] = distanceKm;
  }

  getNearbyCities(city) {
    if (!this.map[city]) throw new Error('City not found in the graph.');
    return Object.keys(this.map[city]);
  }

  getDistance(cityA, cityB) {
    if (!this.map[cityA] || !this.map[cityB]) {
      throw new Error('One or both cities are not registered.');
    }
    return this.map[cityA][cityB] ?? null;
  }

  /**
   * Suggest alternative destinations within a certain maximum distance.
   */
  suggestAlternatives(city, maxDistance) {
    if (!this.map[city]) throw new Error('City not found in the graph.');
    return Object.entries(this.map[city])
      .filter(([_, distance]) => distance <= maxDistance)
      .map(([neighbor]) => neighbor);
  }
}

module.exports = CityGraph;