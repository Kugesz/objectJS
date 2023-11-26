function CheckInput(name, job) {
  let errorP = document.getElementById("error");

  if (name.length != 2) {
    errorP.textContent = "A név nem megfelelő!";
    return false;
  }

  if (job.length == 0) {
    errorP.textContent = "A munka nem megfelelő!";
    return false;
  }

  return true;
}
