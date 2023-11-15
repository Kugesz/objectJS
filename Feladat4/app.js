let heroes = [
  { firstName: "Ahsoka", lastName: "Tano", job: "padawan", iconName: "ashoka" },
  { firstName: "Boba", lastName: "Fett", job: "fejvadász", iconName: "boba_fett" },
  { firstName: "Han", lastName: "Solo", job: "csempész", iconName: "han" },
  { firstName: "Leia", lastName: "Organa", job: "szenátor", iconName: "" }
];

const cardsContainer = document.getElementById("cardsContainer")

const newNameInput = document.getElementById("newName");
const newJobInput = document.getElementById("newJob");

document.getElementById("createNewCard").addEventListener("click", AddHero(newNameInput, newJobInput));


Render();