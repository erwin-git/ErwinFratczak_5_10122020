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

//total items
let total = 0;
for (var i = 0; i < items.length; i++) {
    total += items[i].price;
}

let totalPrice = document.createElement("p");
totalPrice.className = "prixTotal";
totalPrice.innerHTML = total/100 + " €";
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


