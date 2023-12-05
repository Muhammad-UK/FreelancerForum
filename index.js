const createListFromArrayofObjects = (arr) => {
  //main function that adds html tags to the array
  //making use of "toFixed" to get 2 decimal points for prices to match the average rate
  const listed = arr
    .map((value) => {
      return `
      <section>
      <p>${value.name}</p>
      <p>Hourly Rate: $${value.price.toFixed(2)}</p>
      <p>Occupation: ${value.occupation}</p>
      </section>
    `;
      //using sections as well to attempt to "css-proof" the function
    })
    .join("");
  return listed;
};

const createRandomFreelancersObject = (names, occupations) => {
  //this function creates and object that is pushable to the freelancer array
  const getRandomIndex = (arr) => {
    //defining this as a function so that I can call it multiple times for different arrays
    return Math.floor(Math.random() * arr.length);
  };
  const randomPrice = Math.floor(Math.random() * (100 - 15 + 1) + 15); //using "100" and "15" as max and min values for the hourly rates random prices
  const randomObject = {
    name: `${names[getRandomIndex(names)]}`, //using template literals because the value getting returned should be a string
    price: randomPrice,
    occupation: `${occupations[getRandomIndex(occupations)]}`,
  };
  return randomObject;
};

const render = () => {
  //this function needs to be called multiple times due to the interval to update the website with new data as it's received
  spanCount.innerHTML = freelancers.length;

  let sum = 0;
  freelancers.forEach((value) => {
    sum += value.price;
  });
  averageRate.innerHTML = (sum / freelancers.length).toFixed(2);

  listingSection.innerHTML = createListFromArrayofObjects(freelancers);
};

//created these id's in the HTML so I can select them and modify them here
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

render();
//calling the render() function before the setInterval starts in order to always display the first two objects before adding anymore

const interval = setInterval(() => {
  freelancers.push(createRandomFreelancersObject(names, occupations));
  render();
  if (freelancers.length === 15) {
    clearInterval(interval);
  }
  //stopping the interval after 15 freelancers because otherwise it would go on forever which I can't imagine would be great for memory usage
}, 2500);
