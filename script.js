const frmaddRight = document.querySelector("#frmaddRight");
const userID = document.querySelector("#username");
const rightID = document.querySelector("#nickName");

// action koppelen aan mijn formulier
// maw: is wil iets doen als er op submit wordt gedrukt

frmaddRight.addEventListener("submit", (event) => {
  // zorg ervoor dat het scherm niet refreched
  // en bepaal zelf wat de submit doet
  event.preventDefault();

  // maak je data object op met de info die
  // verstuurd moet worden met de POST
  const data = {
    userID: userID.value,
    rightID: rightID.value,
  };

  // set options voor de post
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  // doe de fetch
  fetch("http://192.168.5.113:3000/api/user/addUserRight", options)
    .then((resultaat) => resultaat.json())
    .then((data) => console.log(data));
});
