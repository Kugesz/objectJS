let heroes = [
  { firstName: "Ahsoka", lastName: "Tano", job: "padawan", iconName: "" },
  { firstName: "Boba", lastName: "Fett", job: "fejvadász", iconName: "" },
  { firstName: "Han", lastName: "Solo", job: "csempész", iconName: "" },
  { firstName: "Leia", lastName: "Organa", job: "szenátor", iconName: "" }
];

const cardsContainer = document.getElementById("cardsContainer")

const newNameInput = document.getElementById("newName");
const newJobInput = document.getElementById("newJob");

document.getElementById("createNewCard").addEventListener("click", AddHero(newNameInput, newJobInput));


Render();