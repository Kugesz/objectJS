function CheckInput(name, job) {
  if (name.length != 2) {
    return false;
  }

  if (job.length == 0) {
    return false;
  }

  return true;
}