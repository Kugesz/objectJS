let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"} ]

document.getElementById("createNewCard").addEventListener("click", AddHero());

const newNameInput = document.getElementById("newName");
const newJobInput = document.getElementById("newJob")

function CheckInput(name, job){
    let nameSplit = name.split(" ");
    if(nameSplit.length != 2){
        return false;
    }

    if(job.length == 0) {
        return false;
    }

    return true;
}

function AddHero() {
    let newName = newNameInput.value.split(" ");
    let newJob = newJobInput.value;

    if(CheckInput(newName, newJob)){
        
    }
    heroes.push({firstName: newName[0], lastName: newName[0], job: newJob})
}

function Render() {

}