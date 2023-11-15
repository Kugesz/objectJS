function AddHero(newNameInput, newJobInput) {
  let newName = newNameInput.value.split(" ");
  let newJob = newJobInput.value;

  if (CheckInput(newName, newJob)) {
  }
  heroes.push({ firstName: newName[0], lastName: newName[0], job: newJob, iconName: "" });
}

function ChangePicture(){
  
}