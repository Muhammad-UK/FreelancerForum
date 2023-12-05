const createListFromObject = (object) => {
  const listed = object
    .map((value) => {
      return `
      <section>
      <p>${value.name}</p>
      <p>Hourly Rate: ${value.price}</p>
      <p>Occupation: ${value.occupation}</p>
      </section>
    `;
    })
    .join("");
  return listed;
};

const createRandomFreelancersObject = (names, occupations) => {
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  const randomPrice = Math.floor(Math.random() * (100 - 15 + 1) + 15);
  const randomObject = {
    name: `${names[getRandomIndex(names)]}`,
    price: randomPrice,
    occupation: `${occupations[getRandomIndex(occupations)]}`,
  };
  return randomObject;
};

const spanCount = document.querySelector("#spanCount");
const averageRate = document.querySelector("#averageRate");
const listingSection = document.querySelector("#listingSection");

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

const occupations = ["gardener", "programmer", "teacher", "trainer"];

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

listingSection.innerHTML = createListFromObject(freelancers);

setInterval(() => {
  freelancers.push(createRandomFreelancersObject(names, occupations));
}, 1000);
