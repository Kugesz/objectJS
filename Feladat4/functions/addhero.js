const image = document.getElementById("newImage");

images = ["ashoka", "boba_fett", "han", "fortnite1", "fortnite2", "fortnite3", "fortnite4"]

function AddHero(newNameInput, newJobInput) {
  let newName = newNameInput.value.split(" ");
  let newJob = newJobInput.value;

  if (CheckInput(newName, newJob)) {
  }
  heroes.push({ firstName: newName[0], lastName: newName[0], job: newJob, iconName: "" });
}

function ImageForward() {
  let currentImage = image.tabIndex(image.src);

  if(currentImage == images.length - 1){
    currentImage.src = images[0];
    return
  }

  currentImage.src = images[currentImage + 1];
  
}

function ImageBack() {
  let currentImage = "pics/" + image.tabIndex(image.src) + ".jpg";

  if(currentImage == 0){
    currentImage == "pics/" + images[images.length - 1] + ".jpg";
    return
  }

  currentImage.src = images[currentImage - 1];
}