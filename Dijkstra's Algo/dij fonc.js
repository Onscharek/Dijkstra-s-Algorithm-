function dijkstra(graph, start) {
    const distances = {};
    const parents = {};
    const visited = {};
  
    // Initialize distances, parents, and visited
    for (let vertex in graph) {
      distances[vertex] = Infinity;
      parents[vertex] = null;
      visited[vertex] = false;
    }
    distances[start] = 0;
  
    // Find the shortest path for all vertices
    for (let i in graph) {
      let current = null;
      for (let vertex in graph) {
        if (!visited[vertex] && (current == null || distances[vertex] < distances[current])) {
          current = vertex;
        }
      }
  
      visited[current] = true;
  
      for (let neighbor in graph[current]) {
        let newDistance = distances[current] + graph[current][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          parents[neighbor] = current;
        }
      }
    }
  
    return distances;
  }
  
  // Example usage:
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  console.log(dijkstra(graph, 'A'));
  