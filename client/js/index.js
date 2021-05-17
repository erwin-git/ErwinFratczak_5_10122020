//API url
//let apiUrlTeddies = "http://localhost:3000/api/teddies";
let apiUrlCameras = "http://localhost:3000/api/cameras";
//let apiUrlFurniture = "http://localhost:3000/api/furniture";

//Items requests
const getItems = () => {
/*    fetch(apiUrlTeddies)
        .then((response) => response.json())
        .then(function (item) {
            for (i = 0; i < item.length; i++) {
                insertItem(item[i]);
            }
        })
        .catch((error) => {alert("Something went wrong please try again...")})
*/
    fetch(apiUrlCameras)
        .then((response) => response.json())
        .then(function (item) {
            for (i = 0; i < item.length; i++) {
                insertItem(item[i]);
            }
        })
        .catch((error) => {alert("Something went wrong please try again...")})

/*    fetch(apiUrlFurniture)
        .then((response) => response.json())
        .then(function (item) {
            for (i = 0; i < item.length; i++) {
                insertItem(item[i]);
            }
        })
        .catch((error) => {alert("Something went wrong please try again...")})
*/        
    inCart()

};
// Execute on load page
window.onload = getItems;

//grid
let mainGrid = document.getElementById("main");

let bsContainer = document.createElement("div");
bsContainer.className = "container";
mainGrid.appendChild(bsContainer);

let bsContainerRows = document.createElement("div");
bsContainerRows.className = "row row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3";
bsContainer.appendChild(bsContainerRows);

// item card creation
const insertItem = (produit) => {
    

//column
    let bsColumn = document.createElement("div");
    bsColumn.className = "col-sm";
    bsContainerRows.appendChild(bsColumn);

//card
    let bsCard = document.createElement("div");
    bsCard.className = "card col-4 mx-1 my-1";
    bsCard.style.width = "100%";
    bsColumn.appendChild(bsCard);

    let image = document.createElement("img");
    image.src = produit.imageUrl;
    image.className = "card-img-top img-fluid";
    image.style.height = "170px"
    bsCard.appendChild(image);

    let bsCardBody = document.createElement("div");
    bsCardBody.className = "card-body";
    bsCard.appendChild(bsCardBody);

    let itemTitle = document.createElement("h3");
    let itemName = document.createTextNode(produit.name);
    itemTitle.className = "card-title";
    itemTitle.appendChild(itemName);
    bsCardBody.appendChild(itemTitle);

    let txtCard = document.createElement("p");
    let descCard = document.createTextNode(produit.description);
    txtCard.className = "card-text";
    txtCard.appendChild(descCard);
    bsCardBody.appendChild(txtCard);

    let price = document.createElement("p");
    let priceData = document.createTextNode(produit.price / 100 + " €");
    price.className = "card-text price";
    price.appendChild(priceData);
    bsCardBody.appendChild(price);

    let button = document.createElement("a");
    button.className = "btn btn-primary float-end";
    button.href = "item.html?id=" + produit._id;
    button.innerHTML = "Afficher plus";
    bsCardBody.appendChild(button);
    
    //bsColumn.appendChild(main);
};

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
