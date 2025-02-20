const head = document.getElementById("head");
const headerSearch = document.querySelector(".header-search");

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

async function coffeeProducts() {
  try {
    const response = await fetch("coffee.json");
    data = await response.json();

    const article = document.getElementById("article");
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
                      <button href="" class="basket-button">В корзину</button>
                  </div>
              </div>
            `;
    }
  } catch (error) {
    console.log("json is undefined");
  }
}
coffeeProducts();
