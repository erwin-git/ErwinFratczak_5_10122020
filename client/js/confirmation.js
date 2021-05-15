




















//----------------------------------------------------------------------
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