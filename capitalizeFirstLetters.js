function capitalizeFirstLetters(input) {
  const array = input.split(' ');
  let toCap = array.map((str) => {
    if (str.length > 0) {
      return str[0].toUpperCase() + str.slice(1);
    } else {
      return '';
    }
  })
  return toCap.join(' ');
}

module.exports = capitalizeFirstLetters;