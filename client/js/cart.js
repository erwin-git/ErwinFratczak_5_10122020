// container init
let cart = document.getElementById("cart");

//------------------------------------------------

//empty cart

//empty cart div
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

//-----------------------------------------------

//full cart

//full cart div
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

// get products and put in table
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

//total price

//total items
let total = 0;
for (var i = 0; i < items.length; i++) {
    total += items[i].price;
}
//total price
let totalPrice = document.createElement("p");
totalPrice.className = "prixTotal";
totalPrice.innerHTML = "Prix total: " + total/100 + " €";
fullCart.appendChild(totalPrice);


//items in cart ---------------------------------IDS
function inCart() {
    if (inCartNumber !== null) {
        let inCartNumberNull = document.getElementById("inCart")
        inCartNumberNull.style.display = "inline"
        let arrayFromStroage = JSON.parse(localStorage.getItem("items"));
        var inCartNumber = arrayFromStroage.length;
        document.getElementById("inCart").innerHTML = inCartNumber;
    } else {
        let inCartNumberNull = document.getElementById("inCart")
        inCartNumberNull.style.display = "none"
    }
}

//-------------------------------

//buttons

//buttons div
let buttons = document.createElement("div");
buttons.setAttribute("id","buttons")
cart.appendChild(buttons);


//Continue shopping
let shopping = document.createElement("button");
shopping.onclick = goHome
shopping.className = "btn btn-primary shopping";
shopping.innerHTML = "Continuer vos achats";
buttons.appendChild(shopping);


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

//-----------------------------

// contact form

//form div
let form = document.createElement("form");
form.setAttribute("id","form")
form.setAttribute("action","post")
form.setAttribute("type","submit")
form.className = "contactForm"
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
firstNamelabel.setAttribute("for","firstname")
firstNamelabel.className = "form-label"
firstNamelabel.innerHTML = "Prénom"
firstNameCol.appendChild(firstNamelabel)
//First name input
let firstNameinput = document.createElement("input")
firstNameinput.setAttribute("type","text")
firstNameinput.setAttribute("id","firstname")
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
lastNamelabel.setAttribute("for","lastname")
lastNamelabel.className = "form-label"
lastNamelabel.innerHTML = "Nom"
lastNameCol.appendChild(lastNamelabel)
//Last name input
let lastNameinput = document.createElement("input")
lastNameinput.setAttribute("type","text")
lastNameinput.setAttribute("id","lastname")
lastNameinput.setAttribute("placeholder","Votre nom")
lastNameinput.setAttribute("aria-label","Last name")
lastNameinput.className = "form-control"
lastNameCol.appendChild(lastNameinput)


// adress e-mail div
let eMailDiv = document.createElement("div")
eMailDiv.className = "mb-3"
form.appendChild(eMailDiv)
//adress e-mail label
let eMaillabel = document.createElement("label")
eMaillabel.setAttribute("for","email")
eMaillabel.className = "form-label"
eMaillabel.innerHTML = "e-Mail"
eMailDiv.appendChild(eMaillabel)
//adress e-mail input
let eMailinput = document.createElement("input")
eMailinput.setAttribute("type","email")
eMailinput.setAttribute("id","email")
eMailinput.setAttribute("placeholder","Votre e-Mail")
eMailinput.setAttribute("aria-label","e-Mail")
eMailinput.className = "form-control"
eMailDiv.appendChild(eMailinput)


// adress div
let adressDiv = document.createElement("div")
adressDiv.className = "mb-3"
form.appendChild(adressDiv)
//adress  label
let adresslabel = document.createElement("label")
adresslabel.setAttribute("for","address")
adresslabel.className = "form-label"
adresslabel.innerHTML = "Adresse"
adressDiv.appendChild(adresslabel)
//adress  input
let adressinput = document.createElement("input")
adressinput.setAttribute("type","text")
adressinput.setAttribute("id","address")
adressinput.setAttribute("placeholder","Votre adresse")
adressinput.setAttribute("aria-label","Adresse")
adressinput.className = "form-control"
adressDiv.appendChild(adressinput)


// City div
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


// Confirm button div
let confirm = document.createElement("div")
confirm.className = "mb-3 confirmDiv"
form.appendChild(confirm)
// Confirm button
let confirmBtn = document.createElement("button");
confirmBtn.setAttribute("id","submit")
confirmBtn.className = "btn btn-primary validate" 
confirmBtn.innerHTML = "Valider votre commande"
confirm.appendChild(confirmBtn);

//----------------------------------------

//sending data

//form validation
form.addEventListener('submit', e => {
    e.preventDefault();
    sendData();
});

// sens data form
function sendData() {
    let contact = {
        firstName: firstNameinput.value,
        lastName: lastNameinput.value,
        email: eMailinput.value,
        address: adressinput.value,
        city: cityinput.value
        
    };

    let products = ids; 
    
    let contactItems = JSON.stringify({
        contact, products
    })
    postOrder(contactItems);
};

//get ids function
function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
//get ids 
let ids = getFields(items, "id");

//post contact and products and put in localStorage contact, order number and total price and go to confirmation page
function postOrder(contactItems) {

    fetch("http://localhost:3000/api/cameras/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode:'cors',
        body: contactItems
    }).then(response => {

        return response.json();

    }).then( response => {
        localStorage.setItem('contact', JSON.stringify(response.contact));
        localStorage.setItem('orderId', JSON.stringify(response.orderId));
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.removeItem('items');
        window.location.replace("./confirmation.html");
    })
    .catch((e) => {
        displayError();
        console.log(e);
    })
}