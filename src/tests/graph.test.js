/**
 * @file graph.test.js
 * @description
 * Unit test suite for the CityGraph module (BookingMx Graph Visualization).
 * These tests verify the correct behavior of the graph logic that models cities
 * and distances between them, used in the BookingMx application to suggest
 * alternative or related destinations.
 *
 * @author Jesús
 * @version 1.2
 * @date 2025-11
 */

const CityGraph = require('../graph');

let graph;

/**
 * Initialize a clean instance of CityGraph before each test.
 */
beforeEach(() => {
  graph = new CityGraph();
});

//
// ─── CORE FUNCTIONALITY TESTS ──────────────────────────────────────────────
//

/**
 * Test that verifies the ability to register a new city in the graph.
 * It ensures that the city is stored as a new node in the internal map.
 */
test('should register a new city', () => {
  graph.addCity('Mexico City');
  expect(Object.keys(graph.map)).toContain('Mexico City');
});

/**
 * Tests that a bidirectional connection between two cities
 * is successfully created with the correct distance.
 */
test('should create connection between two cities', () => {
  graph.addConnection('Mexico City', 'Puebla', 130);
  expect(graph.getDistance('Mexico City', 'Puebla')).toBe(130);
});

/**
 * Tests the retrieval of nearby cities for a given node.
 */
test('should list nearby cities for a given location', () => {
  graph.addConnection('Toluca', 'Querétaro', 210);
  expect(graph.getNearbyCities('Toluca')).toEqual(['Querétaro']);
});

/**
 * Tests that suggestions for alternative destinations are correctly
 * returned when they fall within a specified maximum distance.
 */
test('should suggest cities within a given distance', () => {
  graph.addConnection('Mexico City', 'Toluca', 70);
  graph.addConnection('Mexico City', 'Puebla', 130);
  const suggestions = graph.suggestAlternatives('Mexico City', 100);
  expect(suggestions).toContain('Toluca');
  expect(suggestions).not.toContain('Puebla');
});

//
// ─── ERROR HANDLING TESTS ─────────────────────────────────────────────────
//

/**
 * Ensures the system handles invalid inputs when adding cities or connections.
 */
test('should throw when adding invalid city names', () => {
  expect(() => graph.addCity('')).toThrow('City name cannot be empty.');
  expect(() => graph.addConnection('', 'Puebla', 100)).toThrow();
});

/**
 * Tests that requesting nearby cities for an unknown city throws an error.
 */
test('should handle unknown city lookups', () => {
  expect(() => graph.getNearbyCities('Guadalajara')).toThrow('City not found');
});

//
// ─── EDGE CASE AND BRANCH COVERAGE TESTS ──────────────────────────────────
//

/**
 * Cover branch: invalid first city (cityA is null) when adding connection.
 */
test('should throw if cityA is null when adding connection', () => {
  expect(() => graph.addConnection(null, 'Puebla', 120))
    .toThrow('City names must be valid.');
});

/**
 * Cover branch: invalid second city (cityB is null) when adding connection.
 */
test('should throw if cityB is null when adding connection', () => {
  expect(() => graph.addConnection('Puebla', null, 120))
    .toThrow('City names must be valid.');
});

/**
 * Cover branch: negative distance validation.
 */
test('should throw if distance is negative', () => {
  expect(() => graph.addConnection('Puebla', 'Querétaro', -10))
    .toThrow('Distance must be greater than zero.');
});

/**
 * Validates behavior when there are no nearby cities within the given distance limit.
 */
test('should return empty list when no cities within given max distance', () => {
  graph.addConnection('Mexico City', 'Monterrey', 900);
  const suggestions = graph.suggestAlternatives('Mexico City', 100);
  expect(suggestions).toEqual([]);
});

/**
 * Ensures suggestAlternatives method throws when city does not exist.
 */
test('should throw when suggesting alternatives for an unknown city', () => {
  expect(() => graph.suggestAlternatives('NonExistent', 100))
    .toThrow('City not found in the graph.');
});

/**
 * Tests that an error is thrown when both cityA and cityB are null.
 * Covers remaining untested branch in addConnection method.
 */
test('should throw when both cityA and cityB are null', () => {
  expect(() => graph.addConnection(null, null, 100))
    .toThrow('City names must be valid.');
});