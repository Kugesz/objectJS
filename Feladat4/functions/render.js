function Render() {
  cardsContainer.innerHTML = ``;
  heroes.forEach((element) => {
    let s = `<div class="card">
              <img src="pics/${element.iconName}.jpg" alt="icon">
              <h2 id="name">${element.firstName + " " + element.lastName}</h2>
              <p id="job">${element.job}</p>
             </div>`;
    cardsContainer.innerHTML += s;
  });

  cardsContainer.innerHTML += `<div class="card" id="newCard">
  <div class="row d-flex justify-content-around align-items-center" style="display: block;">
    <i style='font-size:24px' class='fas' onclick ="ImageBack()">&#xf104;</i>
    <img src="pics/ashoka.jpg" alt="" id="newImage" style="margin: 0">
    <i style='font-size:24px' class='fas' onclick = "ImageForward()">&#xf105;</i>
  </div>
    <input type="text" id="newName">
    <input type="text" id="newJob">
    
    <p id="error"></p>

    <button id="createNewCard" onclick="AddHero()">Hozzáadás</button>
</div>`;
}
