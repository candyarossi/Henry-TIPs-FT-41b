function mdArraySum(arr) {
  // Your code here:
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // if (typeof arr[i] === "number") sum += arr[i];
    // else sum += mdArraySum(arr[i]);

    if (Array.isArray(arr[i])) sum += mdArraySum(arr[i]);
    else sum += arr[i];
  }

  return sum;
}

module.exports = mdArraySum;
