console.log("lalalalala");

var cartButton = document.querySelector("#header-view-cart-button");

cartButton.addEventListener('click', fetchCart);

async function fetchCart() {
    fetch("https://www.woolworths.com.au/apis/ui/Trolley")
    .then((response) => {
        return response.json();
    })
    .then((body) => {
        console.log(body);

        var dump = document.querySelector(".cmp-copy__title");
        console.log(dump);
        dump.innerHTML = JSON.stringify(body);
    })
}
