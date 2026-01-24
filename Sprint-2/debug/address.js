// Predict and explain first...
// This code logs the house number from the address object.
//The address variable is an object, and houseNumber is one of its properties. We can access object properties using bracket notation with the key as a string


// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);
