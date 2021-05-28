//GET url with ID
let apiUrlCameras = "http://localhost:3000/api/cameras/";
const params = new URLSearchParams(window.location.search);
let apiId = params.get("id");
let url = apiUrlCameras + apiId ;

// put in product
fetch(url)
    .then((response) => response.json())
    .then(product => {

        //adding header 
        let itemHeader = document.getElementById("itemHeader");
        let itemHeaderTitle = document.createElement("h2");
        let itemName2 = document.createTextNode("Produit: " + product.name);
        itemHeaderTitle.appendChild(itemName2);
        itemHeader.appendChild(itemHeaderTitle);

        let mainItem = document.getElementById("item");

        //creating left column 
        let colLeft = document.createElement("div");
        colLeft.className = "colLeft";
        mainItem.appendChild(colLeft);

        //creating right column
        let colRight = document.createElement("div");
        colRight.className = "colRight";
        mainItem.appendChild(colRight);

        //adding image
        let imageItem = document.createElement("img");
        imageItem.className = "imageItem";
        imageItem.src = product.imageUrl;
        colLeft.appendChild(imageItem);

        //adding header in right column
        let itemTitle = document.createElement("h3");
        let itemName = document.createTextNode(product.name);
        itemTitle.className = "text-center";
        itemTitle.appendChild(itemName);
        colRight.appendChild(itemTitle);

        //adding description 
        let itemDesc = document.createElement("p");
        let itemTxt = document.createTextNode(product.description);
        itemDesc.appendChild(itemTxt);
        colRight.appendChild(itemDesc);

        //adding price
        let itemPrice = document.createElement("p");
        let priceData = document.createTextNode(product.price / 100 + " €");
        itemPrice.className = "prix";
        itemPrice.appendChild(priceData);
        colRight.appendChild(itemPrice);

        //adding options 
        let labelItem = document.getElementById("labelItem");
        colRight.appendChild(labelItem);
        let selectItem = document.getElementById("selectItem");
        labelItem.appendChild(selectItem);
        
        let defaultOption = document.createElement("option");
        defaultOption.setAttribute('disabled', "disabled");
        defaultOption.setAttribute('selected', "true");
        defaultOption.setAttribute('value', 0 );
        defaultOption.textContent = "Faites votre choix";
        selectItem.appendChild(defaultOption);
        //get all options
        let optionItem = product.lenses
            for (let i = 0; i < optionItem.length; i++) {
            let options = document.createElement('option');
            selectItem.appendChild(options);
            options.textContent = optionItem[i];  
            
            } 

        //adding button
        let buttonCart = document.createElement("button");
        buttonCart.className = "btn btn-primary float-end";
        buttonCart.innerHTML = "Ajouter au panier";
        colRight.appendChild(buttonCart);
        buttonCart.onclick =  addToCart;
        
        //add to cart
        function addToCart() {
            let select = document.querySelector('select');
            let itemLenses = select.selectedIndex;
            if( itemLenses == 0 ){
                alert("Vous devez d'abord choisir une lentille !");
            }else{
                let itemsInfo =  {
                    id : product._id,
                    name : product.name,
                    price : product.price,
                    imageUrl : product.imageUrl,
                };
                let items = JSON.parse(localStorage.getItem('items') || '[]');
                items.push(itemsInfo);
                localStorage.setItem('items', JSON.stringify(items))
                inCart();

                //Continue or go to cart 
                var r = confirm("Votre article a été ajouté au Panier\n\nVoulez-vous voir le Panier?");
                    if (r == true) {
                        window.location.href = "cart.html"
                    } else {}
                
                }
        }  
    
})
    .catch(error => console.error(error));

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







