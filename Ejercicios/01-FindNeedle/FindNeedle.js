// haystack: react-redux
// needle: redux
// FindNeedle() -> 6

function FindNeedle(haystack, needle) {
  // Your code here:

  // INCOMPLETO

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        return i;
      }
    }
  }

  // OPCION 1

  haystack = haystack.split("");
  needle = needle.split("");

  let pointer, index;

  for (let i = 0; i < haystack.length; i++) {
    index = i;
    pointer = i;
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[pointer]) {
        pointer++;
        if (j === needle.length - 1) {
          return index;
        }
      } else {
        break;
      }
    }
  }
  return -1;

  // OPCION 2

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;

  // OPCION 3 -> TRAMPA

  return haystack.search(needle);

  // OPCION 4 -> TRAMPA

  const match = haystack.match(needle);
  return match ? match.index : -1;
}

module.exports = FindNeedle;
