const api = "https://fakestoreapi.com/products";
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log(data);
  data.map((element) => {
    //create cardElement ...............
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    //create ProductTitleElement.............
    const productTitleElement = document.createElement("p");
    productTitleElement.className = "productTitleElement";

    //create product image element.................
    const productImageElement = document.createElement("img");
    productImageElement.className = "productImageElement";
    productImageElement.src = element.image;

    //create product price element.................
    const productPriceElement = document.createElement("p");
    productPriceElement.className = "productPriceElement";

    //create product button element(buy)
    const productBtnBuyElement = document.createElement("button");
    productBtnBuyElement.classList = "productBtnBuyElement";
    productBtnBuyElement.textContent = "BUY";

    productTitleElement.innerHTML = element.title;
    productPriceElement.innerHTML = "Price :" + " $" + element.price;
    cardElement.appendChild(productImageElement);
    cardElement.appendChild(productTitleElement);
    cardElement.appendChild(productPriceElement);
    cardElement.appendChild(productBtnBuyElement);
    const cards = document.getElementById("cards");
    cards.appendChild(cardElement);
    // document.getElementById("container").appendChild(title);
  });
};
xhr.open("GET", api);
xhr.send();
