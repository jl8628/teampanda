
function addToBasket(title, price, quantity) {

    const item = `${title} - Price: ${price} - Quantity: ${quantity}`;


    const orders = document.querySelector(".orders");


    const orderItem = document.createElement("div");


    orderItem.classList.add("order-item");

    orderItem.textContent = item;


    orders.appendChild(orderItem);
}


document.querySelector(".clear").addEventListener("click", function() {

    document.querySelector(".orders").innerHTML = "";
});

const addToBasketButtons = document.querySelectorAll(".button");

addToBasketButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const box = event.target.closest(".box");

        const title = box.querySelector("h5").textContent;
        const price = box.querySelector(".prices").textContent;
        const quantity = box.querySelector("select[name='numbers']").value;

        addToBasket(title, price, quantity);
    });
});
