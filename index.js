const spanCount = document.querySelector("#spanCount");
const averageRate = document.querySelector("#averageRate");

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
];

const occupations = ["gardener", "programmer", "teacher", "gardner"];

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

spanCount.innerHTML = freelancers.length;

let sum = 0;
freelancers.forEach((value) => {
  sum += value.price;
});
averageRate.innerHTML = sum / freelancers.length;
