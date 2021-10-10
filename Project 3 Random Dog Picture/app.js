const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");
const img = document.querySelector(`.dogpicture`);

document.querySelector(".button").addEventListener("click", addNewDoggo);

function addNewDoggo() {
  console.log(`hello`);
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      img.src = processedResponse.message;
    });
}
