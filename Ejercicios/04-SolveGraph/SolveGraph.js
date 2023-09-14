// a -> r   =   true
// a -> d   =   true
// s -> b   =   false

function SolveGraph(graph, start, end, arr = []) {
  // Your code here:

  // RECURSIVO

  if (arr.includes(start)) return false;
  arr.push(start);
  for (const nodo of graph[start]) {
    if (nodo === end) return true;
    if (SolveGraph(graph, nodo, end, arr)) return true;
  }
  return false;

  // ITERATIVO

  let queue = [start];
  let visited = {};
  let node;
  while (queue.length) {
    // saco el primer nodo del queue
    node = queue.shift();
    // si el nodo no fue visitado
    if (!visited[node]) {
      // marco el nodo como visitado
      visited[node] = true;
      // si el nodo es el nodo final, devuelvo true
      if (node === end) {
        return true;
      }
      // le agrego al queue los nodos que estan conectados al nodo actual
      queue = queue.concat(graph[node]);
    }
  }
  return false;
}

module.exports = SolveGraph;
