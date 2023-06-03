//your JS code here. If required.
const animalList = [
  "camel",
  "cheetah",
  "elephant",
  "gorilla",
  "koala",
  "lion",
  "polar_bear",
  "tiger",
  "wolf"
];

const photoContainer = document.getElementById("photos");

animalList.forEach(animal => {
  const img = document.createElement("img");
  img.src = `https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animal}.jpg`;
  img.alt = animal;
  
  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");
  photoDiv.appendChild(img);
  
  photoContainer.appendChild(photoDiv);
});
