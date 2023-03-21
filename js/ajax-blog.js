fetch(`data/blog.json`).then(response => response.json()).then(data => {
    const gridContainer = document.querySelector('#posts');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('.card');
        card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.content} available</p>
        <p>Category: ${item.categories.join(', ')}</p>
      `;
        gridContainer.appendChild(card);
    })
})