module.exports = function reverse (n) {
  const regex = new RegExp('[0-9]');

  return Number(n
      .toString()
      .split('')
      .filter(s => regex.test(s))
      .reverse()
      .join('')
  );
}
