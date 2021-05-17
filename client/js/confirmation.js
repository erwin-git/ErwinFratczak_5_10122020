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
thxTitle.innerHTML = "Merci " + `${contact.firstName}` + " !"
confirmDiv.appendChild(thxTitle);

//Thx h3
let thxTitle2 = document.createElement("p");
thxTitle2.className = "thxTitle2"
thxTitle2.innerHTML = "Votre commande à bien été enregistrée"
confirmDiv.appendChild(thxTitle2);
//-------------------------------------------
//confirmation number div
let confNumDiv = document.createElement("div");
confNumDiv.className = "confNumDiv"
confirmDiv.appendChild(confNumDiv)

//confirmation number title
let confNumTitle = document.createElement("p");
confNumTitle.className = "confNumTitle"
confNumTitle.innerHTML = "Numéro de la commande :"
confNumDiv.appendChild(confNumTitle)
//confirmation number
let confNum = document.createElement("p");
confNum.className = "confNum"
confNum.innerHTML = `${orderId}`;
confNumDiv.appendChild(confNum)

//---------------------------------------------------------------------------
//confirm div2
let confirmDiv2 = document.createElement("div");
confirmDiv2.setAttribute("id","confirmDiv2");
confirmation.appendChild(confirmDiv2);

//------------------------------------------------
//the delivery adress
//the delivery adress div

let delivAdressDiv = document.createElement("div");
delivAdressDiv.setAttribute("id","delivAdressDiv");
confirmDiv2.appendChild(delivAdressDiv);

//the delivery adress title
let delivAdressTitle = document.createElement("p");
delivAdressTitle.className = "delivAdressTitle"
delivAdressTitle.innerHTML = " Adresse de livraison :"
delivAdressDiv.appendChild(delivAdressTitle);

//first and last name 
let flName = document.createElement("p");
flName.className = "flName"
flName.innerHTML = `${contact.firstName}` + " " + `${contact.lastName}`
delivAdressDiv.appendChild(flName);
//address
let address = document.createElement("p");
address.className = "address"
address.innerHTML = `${contact.address}`;
delivAdressDiv.appendChild(address);
//city
let city = document.createElement("p");
city.className = "city"
city.innerHTML = `${contact.city}`
delivAdressDiv.appendChild(city);

//------------------------------------------------
//total price
//total price div
let totamPriceDiv = document.createElement("div");
totamPriceDiv.setAttribute("id","totamPriceDiv");
confirmDiv2.appendChild(totamPriceDiv);

//total price title
let totamPriceTitle = document.createElement("p");
totamPriceTitle.className = "totamPriceTitle"
totamPriceTitle.innerHTML = "Prix total de votre commande :"
totamPriceDiv.appendChild(totamPriceTitle);

let totamPrice = document.createElement("p");
totamPrice.className = "totamPrice"
totamPrice.innerHTML = `${total}`/100 + " €"
totamPriceDiv.appendChild(totamPrice);

//localStorage.removeItem('contact');
//localStorage.removeItem('total');
//localStorage.removeItem('orderId');