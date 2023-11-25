const images = ["ashoka", "boba_fett", "han", "fortnite1", "fortnite2", "fortnite3", "fortnite4"]

function AddHero() {
  let newNameInput = document.getElementById("newName");
  let newJobInput = document.getElementById("newJob");

  let newName = newNameInput.value.split(" ");
  let newJob = newJobInput.value;
  let newImage = GetName();

  if (CheckInput(newName, newJob)) {
    heroes.push({ firstName: newName[0], lastName: newName[1], job: newJob, iconName: newImage });  //  Hozzaadjuk az uj elemet

    Render(); //  Megjelenitjuk az elemeket
  }
}

function ImageForward() {
  let image = document.getElementById("newImage");

  //  Mennyi az indexe a jelenlegi kepnek
  let currentImage = GetName();
  let currentImageIndex = images.indexOf(currentImage);

  //  Ha az index a tomb vegen jar vissza ugrik az elejere
  if(currentImage == images.length - 1){
    ChangePicture(0);  //  Megvaltoztatjuk a kep forrasat
    return
  }

  ChangePicture(currentImageIndex + 1);  //  Megvaltoztatjuk a kep forrasat
}

function ImageBack() {
  let image = document.getElementById("newImage");

  let currentImage = GetName();
  let currentImageIndex =  images.indexOf(currentImage);

  if(currentImageIndex == 0){
    ChangePicture(images.length - 1); //  Megvaltoztatjuk a kep forrasat
    return
  }

  ChangePicture(currentImageIndex - 1); //  Megvaltoztatjuk a kep forrasat
}

function GetName() {
  let image = document.getElementById("newImage");
  let src = image.src;  // source ki szedes

  let srcSplit = src.split("/")

  let fileName = srcSplit[srcSplit.length -1];  //  Utolso elem kiszedése

  fileName = fileName.replace(".jpg", "");
  return fileName;
}

function ChangePicture(i) {
  let image = document.getElementById("newImage");
  
  image.src = "pics/" + images[i] + ".jpg";
}