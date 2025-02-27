document.addEventListener('DOMContentLoaded', () => {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    const basketContainer = document.getElementById('basket-items');
    const clearBasketButton = document.getElementById('clear-basket');

    if (basketItems.length === 0) {
        basketContainer.innerHTML = '<p class="empty">Your basket is empty.</p>';
    } else {
        basketItems.forEach(item => {
            basketContainer.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="coffee404">
                    <div class="card-body">
                        <div class="name-price">
                            <h5 class="card-title">${item.name}</h5>
                            <h5>${item.price}₸</h5>
                        </div>
                        <p class="card-text">${item.description}</p>
                        <button class="buy-button">Купить</button>
                    </div>
                </div>
            `;
        });
    }

    clearBasketButton.addEventListener('click', () => {
        localStorage.removeItem('basketItems');
        basketContainer.innerHTML = '<p class="empty">Your basket is empty.</p>';
    });
});