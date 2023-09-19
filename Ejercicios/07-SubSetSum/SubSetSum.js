// subsetSum( [1,10,5,3], 9 ); output: true <= 1 + 5 + 3

// subsetSum( [1,10,5,3], 17 ); output:false

// subsetSum( [1,10,5,3], 10 ); output:true <= 10 + 0 = 10

function subsetSum(nums, n) {
  // Your code here:

  // OPCION 1

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num === n) return true;
    for (let j = i + 1; j < nums.length; j++) {
      let suma = num + nums[j];
      if (suma === n) return true;
      if (suma > n) continue;
      if (suma < n) num = suma;
    }
  }
  return false;

  // OPCION 2

  if (nums.length === 0) return false;
  if (n === 0) return true;
  if (nums[0] === n) return true;
  if (nums[0] > n) return subsetSum(nums.slice(1), n);
  return subsetSum(nums.slice(1), n - nums[0]) || subsetSum(nums.slice(1), n);

  // OPCION 3

  let sums = new Set([0]);
  return nums.some((num) => {
    let copySums = [...sums];
    if (num === n) return true;
    for (let i = 0; i < copySums.length; i++) {
      let sum = num + copySums[i];
      if (sum === n) return true;
      if (sum < n) sums.add(sum);
    }
  });

  // OPCION 4

  if (nums.filter((num) => num === n).length > 0) return true;
  let numFilter = nums.filter((num) => num < n);
  let acum = numFilter.reduce((acc, valor) => acc + valor, 0);
  if (acum < n) return false;
  if (acum === n) return true;
}

module.exports = subsetSum;
