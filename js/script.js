const head = document.getElementById("head");
const headerSearch = document.querySelector(".header-search");
const arrowUp = document.getElementById("upper-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    arrowUp.style.display = "flex";
  } else {
    arrowUp.style.display = "none";
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    head.style.margin = "0px";
    head.style.borderRadius = "0px";
    head.style.height = "50px";
    head.style.top = "0px";
    head.style.backgroundColor = "rgb(224, 221, 221)";
    headerSearch.style.display = "flex";
  } else {
    head.style.margin = "20px 35px";
    head.style.borderRadius = "100px";
    head.style.height = "65px";
    head.style.top = "10px";
    headerSearch.style.display = "none";
  }
});

const article = document.getElementById("article");
let data = [];

async function coffeeProducts() {
  try {
    const response = await fetch("../js/coffee.json");
    data = await response.json();

    for (let i = 0; i < data.coffee.length; i++) {
      article.innerHTML += `
            <div class="card">
                <img src="${data.coffee[i].img}" alt="coffee404">
                  <div class="card-body">
                      <div class="name-price">
                          <h5 class="card-title">${data.coffee[i].name}</h5>
                          <h5>${data.coffee[i].price}₸</h5>
                      </div>
                      <p class="card-text">${data.coffee[i].description}</p>   
                      <button href="" class="basket-button" onclick="addToBasket(${i})">В корзину</button>
                  </div>
              </div>
            `;
    }
    
  } catch (error) {
    console.log("json is undefined");
  }
}
coffeeProducts();

const basket = document.getElementById('basket');
let num = 0;

function addToBasket(index) {
  const selectedProduct = data.coffee[index];
  let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
  basketItems.push(selectedProduct);
  localStorage.setItem('basketItems', JSON.stringify(basketItems));
  num++;
  basket.textContent = `Basket(${num})`;
  showNotification();
}

function showNotification() {
  const notification = document.getElementById('notification');
  const timerElement = document.getElementById('timer');
  let timer = 3;

  notification.style.right = '20px';

  const countdown = setInterval(() => {
    timer--;
    timerElement.textContent = timer;
    if (timer === 0) {
      clearInterval(countdown);
      notification.style.right = '-350px';
    }
  }, 1000);
}

const searchInp = document.querySelector(".search");
let searchProFil = [];

searchInp.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();     
  myrza(value);
});

function myrza(value) {
  searchProFil = data.coffee.filter(product => product.name.toLowerCase().startsWith(value));
  
  article.innerHTML = '';
  searchProFil.forEach(product => {
      article.innerHTML += `
          <div class="card">
                <img src="${product.img}" alt="coffee404">
                  <div class="card-body">
                      <div class="name-price">
                          <h5 class="card-title">${product.name}</h5>
                          <h5>${product.price}₸</h5>
                      </div>
                      <p class="card-text">${product.description}</p>   
                      <button href="" class="basket-button" onclick="addToBasket(${data.coffee.indexOf(product)})">В корзину</button>
                  </div>
              </div>
      `;
  });
}