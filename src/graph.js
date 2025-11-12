/**
 * @file graph.js
 * @description
 * CityGraph module for BookingMx – handles nearby cities and their distances.
 * <p>
 * This module is used to build and manage a city network in the BookingMx system.
 * Each city is represented as a node, and each edge represents the distance 
 * between two cities in kilometers. This information is used to display
 * related or alternative destinations within the booking interface.
 * </p>
 *
 * @module CityGraph
 * @version 1.2
 * @date 2025-11
 * @author Jesús
 */

class CityGraph {
  /**
   * Creates a new CityGraph instance.
   * @constructor
   * @example
   * const graph = new CityGraph();
   */
  constructor() {
    /**
     * Internal graph map structure.
     * Each city is represented as a key, and its value is an object
     * where neighboring cities are keys and their distances (in km) are values.
     * @type {Object<string, Object<string, number>>}
     * @example
     * {
     *   "Mexico City": { "Puebla": 130, "Toluca": 70 },
     *   "Puebla": { "Mexico City": 130 }
     * }
     */
    this.map = {};
  }

  /**
   * Adds a new city to the graph if it does not already exist.
   *
   * @param {string} city - The name of the city to add.
   * @throws {Error} If the city name is empty or invalid.
   * @example
   * graph.addCity("Mexico City");
   */
  addCity(city) {
    if (!city) throw new Error('City name cannot be empty.');
    if (!this.map[city]) this.map[city] = {};
  }

  /**
   * Creates a bidirectional connection between two cities,
   * assigning a distance in kilometers between them.
   *
   * @param {string} cityA - The first city name.
   * @param {string} cityB - The second city name.
   * @param {number} distanceKm - The distance in kilometers between both cities.
   * @throws {Error} If city names are invalid or the distance is not positive.
   * @example
   * graph.addConnection("Mexico City", "Puebla", 130);
   */
  addConnection(cityA, cityB, distanceKm) {
    if (!cityA || !cityB) throw new Error('City names must be valid.');
    if (distanceKm <= 0) throw new Error('Distance must be greater than zero.');
    this.addCity(cityA);
    this.addCity(cityB);
    this.map[cityA][cityB] = distanceKm;
    this.map[cityB][cityA] = distanceKm;
  }

  /**
   * Returns a list of cities directly connected to the provided city.
   *
   * @param {string} city - The city name.
   * @returns {string[]} An array of city names connected to the given city.
   * @throws {Error} If the specified city does not exist in the graph.
   * @example
   * graph.getNearbyCities("Mexico City"); // Response = "Puebla", "Toluca"
   */
  getNearbyCities(city) {
    if (!this.map[city]) throw new Error('City not found in the graph.');
    return Object.keys(this.map[city]);
  }

  /**
   * Returns the distance between two specified cities.
   *
   * @param {string} cityA - The name of the first city.
   * @param {string} cityB - The name of the second city.
   * @returns {?number} The distance in kilometers, or {@code null} if no connection exists.
   * @throws {Error} If one or both cities are not registered in the graph.
   * @example
   * graph.getDistance("Mexico City", "Puebla"); // 130
   */
  getDistance(cityA, cityB) {
    if (!this.map[cityA] || !this.map[cityB]) {
      throw new Error('One or both cities are not registered.');
    }
    return this.map[cityA][cityB] ?? null;
  }

  /**
   * Suggests alternative destinations connected to the given city
   * where distances are less than or equal to the specified maximum distance.
   *
   * @param {string} city - The base city.
   * @param {number} maxDistance - The maximum distance in kilometers for suggestions.
   * @returns {string[]} A list of cities within the specified distance limit.
   * @throws {Error} If the city is not found in the graph.
   * @example
   * graph.addConnection("Mexico City", "Toluca", 70);
   * graph.addConnection("Mexico City", "Puebla", 130);
   * graph.suggestAlternatives("Mexico City", 100); // Response = "Toluca"
   */
  suggestAlternatives(city, maxDistance) {
    if (!this.map[city]) throw new Error('City not found in the graph.');
    return Object.entries(this.map[city])
      .filter(([_, distance]) => distance <= maxDistance)
      .map(([neighbor]) => neighbor);
  }
}

module.exports = CityGraph;