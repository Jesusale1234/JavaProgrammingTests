const CityGraph = require('../graph');

let graph;
beforeEach(() => {
  graph = new CityGraph();
});

test('should register a new city', () => {
  graph.addCity('Mexico City');
  expect(Object.keys(graph.map)).toContain('Mexico City');
});

test('should create connection between two cities', () => {
  graph.addConnection('Mexico City', 'Puebla', 130);
  expect(graph.getDistance('Mexico City', 'Puebla')).toBe(130);
});

test('should list nearby cities for a given location', () => {
  graph.addConnection('Toluca', 'Querétaro', 210);
  expect(graph.getNearbyCities('Toluca')).toEqual(['Querétaro']);
});

test('should suggest cities within a given distance', () => {
  graph.addConnection('Mexico City', 'Toluca', 70);
  graph.addConnection('Mexico City', 'Puebla', 130);
  const suggestions = graph.suggestAlternatives('Mexico City', 100);
  expect(suggestions).toContain('Toluca');
  expect(suggestions).not.toContain('Puebla');
});

test('should throw when adding invalid city names', () => {
  expect(() => graph.addCity('')).toThrow('City name cannot be empty.');
  expect(() => graph.addConnection('', 'Puebla', 100)).toThrow();
});

test('should handle unknown city lookups', () => {
  expect(() => graph.getNearbyCities('Guadalajara')).toThrow('City not found');
});

// Extra test 1 – cover branch: invalid city A (null)
test('should throw if cityA is null when adding connection', () => {
  expect(() => graph.addConnection(null, 'Puebla', 120))
    .toThrow('City names must be valid.');
});

// Extra test 2 – cover branch: invalid city B (null)
test('should throw if cityB is null when adding connection', () => {
  expect(() => graph.addConnection('Puebla', null, 120))
    .toThrow('City names must be valid.');
});

// Extra test 3 – cover branch: distance negative, if not tested
test('should throw if distance is negative', () => {
  expect(() => graph.addConnection('Puebla', 'Querétaro', -10))
    .toThrow('Distance must be greater than zero.');
});

// Extra test 4 – cover branch: suggestAlternatives when none within range
test('should return empty list when no cities within given max distance', () => {
  graph.addConnection('Mexico City', 'Monterrey', 900);
  const suggestions = graph.suggestAlternatives('Mexico City', 100);
  expect(suggestions).toEqual([]);
});

// Cover condition where suggestAlternatives throws for unknown city
test('should throw when suggesting alternatives for an unknown city', () => {
  expect(() => graph.suggestAlternatives('NonExistent', 100))
    .toThrow('City not found in the graph.');
});

// Cover condition where both cityA and cityB are missing (double error path)
test('should throw when both cityA and cityB are null', () => {
  expect(() => graph.addConnection(null, null, 100))
    .toThrow('City names must be valid.');
});