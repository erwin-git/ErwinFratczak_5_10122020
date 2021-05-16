// container init
let cart = document.getElementById("cart");

//empty cart
let emptyCart = document.createElement("div");
emptyCart.setAttribute("id","emptyCart")
cart.appendChild(emptyCart);

let emptyCartTitle = document.createElement("h3");
emptyCartTitle.innerHTML = "Votre panier est vide !";
emptyCart.appendChild(emptyCartTitle);
//Button go home
let goHomeBtn = document.createElement("button");
goHomeBtn.onclick = goHome
goHomeBtn.className = "btn btn-primary goHomeBtn";
goHomeBtn.innerHTML = "Voir les produits";
emptyCart.appendChild(goHomeBtn);
//function go home
function goHome(){
    window.location.href = "index.html"
};

//full cart
let fullCart = document.createElement("div");
fullCart.setAttribute("id","fullCart")
cart.appendChild(fullCart);

//if empty show emptyCart
if (localStorage.getItem('items') === null) {
    fullCart.style.display = "none";
} else {
    emptyCart.style.display = "none";
}

//div list
let itemList = document.createElement("div");
itemList.className = "itemList";
fullCart.appendChild(itemList);

//table header
let table = document.createElement("table");
table.className = "table align-middle";
itemList.appendChild(table);

let tHead = document.createElement("thead");
table.appendChild(tHead);

let trHead = document.createElement("tr");
tHead.appendChild(trHead);

//table columns
//Header - Image
let imgCol = document.createElement("th");
imgCol.setAttribute("scope", "col");
imgCol.innerHTML = "IMAGE";
trHead.appendChild(imgCol);

//Header - Product ID
let idCol = document.createElement("th");
idCol.setAttribute("scope", "col");
idCol.innerHTML = "ID";
trHead.appendChild(idCol);

//Header - Product name
let nameCol = document.createElement("th");
nameCol.setAttribute("scope", "col");
nameCol.innerHTML = "PRODUIT";
trHead.appendChild(nameCol);

//Header - Product price
let priceCol = document.createElement("th");
priceCol.setAttribute("scope", "col");
priceCol.innerHTML = "PRIX";
trHead.appendChild(priceCol);

//table body
let tBody = document.createElement("tbody");
table.appendChild(tBody);

var items = JSON.parse(localStorage.getItem('items'));
for (var i = 0; i < items.length; i++) {

    //table body rows
    let tr = document.createElement("tr");
    tBody.appendChild(tr);

    //Body - Image
    let tdForImg = document.createElement("td");
    tr.appendChild(tdForImg);
    let tdImg = document.createElement("img");
    tdImg.setAttribute('src', items[i].imageUrl);
    tdForImg.appendChild(tdImg);

    //Body - Product name
    let id = items[i].id;
    let shortID = id.substr(-6);
    let tdId = document.createElement("td");
    tdId.innerHTML = shortID
    tr.appendChild(tdId);

    //Body - Product name
    let tdName = document.createElement("td");
    tdName.innerHTML = items[i].name;
    tr.appendChild(tdName);

    //Body - Product price
    let tdPrice = document.createElement("td");
    tdPrice.innerHTML = items[i].price/100 + " €";
    tr.appendChild(tdPrice);

}
//-------------------------------------------
//nombre d'article et prix total--------------------------------------
//------------------------------------------------------------
//total items
let total = 0;
for (var i = 0; i < items.length; i++) {
    total += items[i].price;
}

let totalPrice = document.createElement("p");
totalPrice.className = "prixTotal";
totalPrice.innerHTML = "Prix total: " + total/100 + " €";
fullCart.appendChild(totalPrice);

//items in cart
function inCart() {
    let arrayFromStroage = JSON.parse(localStorage.getItem("items"));
    var inCartNumber = arrayFromStroage.length;

    if (inCartNumber === null) {
        let inCartNumberNull = document.getElementById("inCart")
        inCartNumberNull.style.display = "none"
    } else {
        document.getElementById("inCart").innerHTML = inCartNumber;    
    }
}
//buttons 
let buttons = document.createElement("div");
buttons.setAttribute("id","buttons")
cart.appendChild(buttons);

//Continue shopping
let shopping = document.createElement("button");
shopping.onclick = goHome
shopping.className = "btn btn-primary shopping";
shopping.innerHTML = "Continuer vos achats";
buttons.appendChild(shopping);
/*----------------------------------------------------------------------------------------
//Go to form
let goToForm = document.createElement("button");
goToForm.onclick = goForm
goToForm.className = "btn btn-primary goToForm";
goToForm.innerHTML = "Valider vôtre commande";
buttons.appendChild(goToForm);
function goForm(){
    window.location.href = "#Form"
};
-------------------------------------------------------------------------------------------*/



//remove cart
let removeCart = document.createElement("button");
removeCart.setAttribute("id","removeCart")
removeCart.className = "btn btn-primary" 
removeCart.innerHTML = "Annuler le panier"
buttons.appendChild(removeCart);

removeCart.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});
//--------------------------------------FORM---------------------------------------------------------------

//form div
let form = document.createElement("form");
form.setAttribute("id","contact")
form.className = "form"
cart.appendChild(form);

let formTitle = document.createElement("h3")
formTitle.className = "formTitle"
formTitle.innerHTML = "Formulaire"
form.appendChild(formTitle)

//contact form creation
// First name and Last name row
let namesRow = document.createElement("div")
namesRow.className = "row"
form.appendChild(namesRow)


//First name col
let firstNameCol = document.createElement("div")
firstNameCol.className = "col"
namesRow.appendChild(firstNameCol)
//First name label
let firstNamelabel = document.createElement("label")
firstNamelabel.setAttribute("for","firstName")
firstNamelabel.className = "form-label"
firstNamelabel.innerHTML = "Prénom"
firstNameCol.appendChild(firstNamelabel)
//First name input
let firstNameinput = document.createElement("input")
firstNameinput.setAttribute("type","text")
firstNameinput.setAttribute("id","firstName")
firstNameinput.setAttribute("placeholder","Votre prénom")
firstNameinput.setAttribute("aria-label","Last name")
firstNameinput.className = "form-control"
firstNameCol.appendChild(firstNameinput)

//Last name col
let lastNameCol = document.createElement("div")
lastNameCol.className = "col"
namesRow.appendChild(lastNameCol)
//Last name label
let lastNamelabel = document.createElement("label")
lastNamelabel.setAttribute("for","lastName")
lastNamelabel.className = "form-label"
lastNamelabel.innerHTML = "Nom"
lastNameCol.appendChild(lastNamelabel)
//Last name input
let lastNameinput = document.createElement("input")
lastNameinput.setAttribute("type","text")
lastNameinput.setAttribute("id","lastName")
lastNameinput.setAttribute("placeholder","Votre nom")
lastNameinput.setAttribute("aria-label","Last name")
lastNameinput.className = "form-control"
lastNameCol.appendChild(lastNameinput)

// adress e-mail
let eMailDiv = document.createElement("div")
eMailDiv.className = "mb-3"
form.appendChild(eMailDiv)

//adress e-mail label
let eMaillabel = document.createElement("label")
eMaillabel.setAttribute("for","eMail")
eMaillabel.className = "form-label"
eMaillabel.innerHTML = "e-Mail"
eMail.appendChild(eMaillabel)
//adress e-mail input
let eMailinput = document.createElement("input")
eMailinput.setAttribute("type","text")
eMailinput.setAttribute("id","eMail")
eMailinput.setAttribute("placeholder","Votre e-Mail")
eMailinput.setAttribute("aria-label","e-Mail")
eMailinput.className = "form-control"
eMailDiv.appendChild(eMailinput)

// adress
let adressDiv = document.createElement("div")
adressDiv.className = "mb-3"
form.appendChild(adressDiv)

//adress  label
let adresslabel = document.createElement("label")
adresslabel.setAttribute("for","adress")
adresslabel.className = "form-label"
adresslabel.innerHTML = "Adresse"
adressDiv.appendChild(adresslabel)
//adress  input
let adressinput = document.createElement("input")
adressinput.setAttribute("type","text")
adressinput.setAttribute("id","adress")
adressinput.setAttribute("placeholder","Votre adresse")
adressinput.setAttribute("aria-label","Adresse")
adressinput.className = "form-control"
adressDiv.appendChild(adressinput)

// City
let cityDiv = document.createElement("div")
cityDiv.className = "mb-3"
form.appendChild(cityDiv)

//city label
let citylabel = document.createElement("label")
citylabel.setAttribute("for","city")
citylabel.className = "form-label"
citylabel.innerHTML = "Ville"
cityDiv.appendChild(citylabel)
//city input
let cityinput = document.createElement("input")
cityinput.setAttribute("type","text")
cityinput.setAttribute("id","city")
cityinput.setAttribute("placeholder","Votre ville")
cityinput.setAttribute("aria-label","Ville")
cityinput.className = "form-control"
cityDiv.appendChild(cityinput)

// Confirm button
let confirm = document.createElement("div")
confirm.className = "mb-3 confirmDiv"
form.appendChild(confirm)

let confirmBtn = document.createElement("button");
confirmBtn.setAttribute("type","submit")
confirmBtn.setAttribute("id","contact-submit")
confirmBtn.className = "btn btn-primary" 
confirmBtn.innerHTML = "Valider votre commande"
confirm.appendChild(confirmBtn);

//-----------------------------------------------------------------------------------------------------

//Regex input control
let strCheck = /[a-zA-Z]/;
let intCheck = /[0-9]/;
let specialCheck = /[§!@#$%^&*(),.?":{}|<>]/;
let emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i ;

//get inputs for form

let firstName = firstNameinput.value;
let lastName = lastNameinput.value;
let eMail = eMailinput.value;
let adress = adressinput.value;
let city = cityinput.value;




