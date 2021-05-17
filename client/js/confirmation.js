// get elements by localStorage
const contact = JSON.parse(localStorage.getItem("contact"));
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem('total'));

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
let thxTitle = document.createElement("p");
thxTitle.className = "thxTitle"
thxTitle.innerHTML = "Merci"
confirmDiv.appendChild(thxTitle);

//Thx h3
let thxTitle2 = document.createElement("p");
thxTitle2.className = "thxTitle2"
thxTitle2.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(thxTitle2);

//confirmation number 
let confNum = document.createElement("p");
confNum.className = "confNum"
confNum.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(confNum)

//the delivery adress
let delivAdress = document.createElement("p");
delivAdress.className = "delivAdress"
delivAdress.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(delivAdress);

//total price 
let totamPrice = document.createElement("p");
totamPrice.className = "thxTitle2"
totamPrice.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(totamPrice);
