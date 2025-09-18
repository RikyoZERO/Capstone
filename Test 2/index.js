Danielle Lawson
6:39 PM
// list of sodas
const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

// Function to print attributes based on attribute list
function displaySodas(sodas, attributeList) {
  for (const soda of sodas) {
    const parts = [];
    for (const attribute of attributeList) {
      parts.push(`${attribute}: ${soda[attribute]}`);
    }
    console.log(parts.join(", "));
  }
}

// Iteration 1
let attributeList = ["name", "image"];
console.log("Iteration 1:");
displaySodas(sodas, attributeList);

// Iteration 2
attributeList = ["name", "sugarFree", "energy"];
console.log("Interation 2:");
displaySodas(sodas, attributeList);