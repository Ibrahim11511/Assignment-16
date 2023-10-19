const cardContainer = document.querySelector('.card-container')

fetch('./products.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach((product) => {
            let currentPrice = (((product.price) * (product.discountPercentage)) / 100).toFixed(2);
            cardContainer.innerHTML +=
`
    <div class="card">
    <div class="image">
        <img src="${product.images[0]}" alt>
    </div>
    <div class="info">
        <h1 class="product-name">${product.title}</h1>
        <p class="description">${product.description}</p>
        <div class="price">
            <span class="current-price">${currentPrice}$</span>
            <span class="deleted-price">${product.price}$</span>
        </div>
        <div class="buttons">
            <button class="add-card"><i class='bx bxs-shopping-bag'></i>Add
                to card</button>
            <button class="like"><i class='bx bx-heart'></i></button>
        </div>
    </div>
</div>
`})})