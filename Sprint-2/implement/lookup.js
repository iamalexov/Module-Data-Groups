function createLookup(property) {
  // implementation here
  let obj = {}
  for (let pair of property ){
     const country = pair[0];
    const currency = pair[1];

    obj[country] = currency;
  }
  return obj
}

module.exports = createLookup;
