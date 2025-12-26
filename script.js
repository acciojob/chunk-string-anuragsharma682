function stringChop(str, size) {
  // If input string is null or undefined
  if (!str) return [];

  size = Number(size);
  if (size <= 0) return [];

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
