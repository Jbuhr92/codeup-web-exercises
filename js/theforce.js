const getLukeBack = async (person) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${person}`);
        let data = await response.json();
        createCard(data);
    } catch (error) {
        console.log(error);
    }
};

const createCard = (data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h2>${data.name}</h2>
    <p>Height: ${data.height} cm</p>
    <p>Mass: ${data.mass} kg</p>
    <p>Birth Year: ${data.birth_year}</p>
  `;
    document.getElementById('luke').appendChild(card);
};

$(document).ready(function() {
    $('#fetch-button').click(function() {
        const person = $('#person-input').val();
        getLukeBack(person);
    });
});



// (async()=>{
//     let lukeIsBack = await getLukeBack(4)
//     console.log(lukeIsBack)
// })();