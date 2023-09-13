function MaxValue(shares) {
  // Your code here:

  // OPCION 1

  let min = shares[0];
  let minIndex = 0;
  for (let i = 0; i < shares.length; i++) {
    if (shares[i] < min) {
      min = shares[i];
      minIndex = i;
    }
  }
  let max = 0;
  for (let i = minIndex; i < shares.length; i++) {
    if (shares[i] > max) {
      max = shares[i];
    }
  }
  return max - min;

  // OPCION 2

  let min = Math.min(...shares);
  let minIndex = shares.indexOf(min);
  let newArr = shares.slice(minIndex);
  let max = Math.max(...newArr);
  return max - min;

  // OPCION 3

  let min = shares[0];
  let max = 0;
  for (let i = 0; i < shares.length; i++) {
    if (shares[i] < min) {
      min = shares[i];
      max = min;
    }
    if (shares[i] > max) {
      max = shares[i];
    }
  }
  return max - min;

  // OPCION 4

  const ret = shares.reduce(
    (previous, current, index) =>
      index === 0
        ? { minCompra: current, maxGanancia: 0 }
        : {
            minCompra: Math.min(previous.minCompra, current),
            maxGanancia: Math.max(
              previous.maxGanancia,
              current - previous.minCompra
            ),
          },
    {}
  ).maxGanancia;
  return ret;
}

module.exports = MaxValue;
