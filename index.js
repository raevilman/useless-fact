const fetch = require("node-fetch");

fetchUselessFact();

function fetchUselessFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.text);
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
