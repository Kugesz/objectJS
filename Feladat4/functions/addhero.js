const image = document.getElementById("newImage");


const images = ["ashoka", "boba_fett", "han", "fortnite1", "fortnite2", "fortnite3", "fortnite4"]

function AddHero(newNameInput, newJobInput) {
  let newName = newNameInput.value.split(" ");
  let newJob = newJobInput.value;

  if (CheckInput(newName, newJob)) {
  }
  heroes.push({ firstName: newName[0], lastName: newName[0], job: newJob, iconName: "" });
}

function ImageForward() {
  //  Mennyi az indexe a jelenlegi kepnek
  let currentImage = images.indexOf(image.src);

  //  Ha az index a tomb vegen jar vissza ugrik az elejere
  if(currentImage == images.length - 1){
    image.src = "pics/" + images[0] + ".jpg";  //  Megvaltoztatjuk a kep forrasat
    return
  }

  image.src = "pics/" + images[currentImage + 1] + ".jpg";
  console.log("elore");
}

function ImageBack() {
  let currentImage =  images.indexOf(image.src.replace("pics/", "").replace(".jpg", "")) + ".jpg";
  console.log("image.src: Ertek: " + image.src.replace("pics/", "").replace(".jpg", "") + ", Tipus: " + typeof(image.src))
  console.log("currentImage: Ertek: " + currentImage + ", Tipus: " + typeof(currentImage));
  if(currentImage == 0){
    image = "pics/" + images[images.length - 1] + ".jpg";
    return
  }

  image.src = images[currentImage - 1];
  console.log("hatra");
}