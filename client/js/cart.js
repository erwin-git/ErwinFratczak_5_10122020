
let cart = document.getElementById("cart");

// items list
let items = [];

//div summary
let itemList = document.createElement("div");
itemList.className = "itemList";
cart.appendChild(itemList);

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

//localStorage loop
let lensesCart = Object.keys(localStorage);
for (i=0; i < lensesCart.length; i++) {
    let product = JSON.parse(localStorage.getItem(lensesCart[i]))

    //table body rows
    let tr = document.createElement("tr");
    tBody.appendChild(tr);

    //Body - Image
    let tdForImg = document.createElement("td");
    tr.appendChild(tdForImg);
    let tdImg = document.createElement("img");
    tdImg.setAttribute('src', product.imageUrl);
    tdForImg.appendChild(tdImg);

    //Body - Product name
    let id = product.id;
    let shortID = id.substr(-6);
    let tdId = document.createElement("td");
    tdId.innerHTML = shortID
    tr.appendChild(tdId);

    //Body - Product name
    let tdName = document.createElement("td");
    tdName.innerHTML = product.name;
    tr.appendChild(tdName);

    //Body - Product price
    let tdPrice = document.createElement("td");
    tdPrice.innerHTML = product.price/100 + " €";
    tr.appendChild(tdPrice);

    items.push(product);
}
