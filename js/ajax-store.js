fetch(`data/inventory.json`).then(response => response.json()).then(data => {
    const gridContainer = document.querySelector('.grid-container');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('.card');
        card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.quantity} available</p>
        <p>Category: ${item.categories.join(', ')}</p>
        <p>Price: $${item.price}</p>
      `;
        gridContainer.appendChild(card);
    })
})