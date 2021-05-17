let confirmation = document.getElementById("confirmation");

//confirm page init
let confirmDiv = document.createElement("div");
confirmDiv.setAttribute("id","confirmDiv");
confirmation.appendChild(confirmDiv);

//OK icon
let okIcon = document.createElement("i");
okIcon.className = "far fa-check-circle";
confirmDiv.appendChild(okIcon);

//Thx h3
let thxTitle = document.createElement("h3");
thxTitle.className = "thxTitle"
thxTitle.innerHTML = "Merci"
confirmDiv.appendChild(thxTitle);

//Thx h3
let thxTitle2 = document.createElement("h4");
thxTitle2.className = "thxTitle2"
thxTitle2.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(thxTitle2);