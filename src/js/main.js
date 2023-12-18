//MILESTONE 0:
//Creare l'array di oggetti con le informazioni fornite.
const teamList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//for (let i = 0; i < teamList.length; i++) {
//console.log(teamList[i]);
//}

// MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
//const cardsContainer = document.getElementById('cards-container');
//for (let i = 0; i < teamList.length; i++) {
//    cardsContainer.innerHTML += teamList[i].name;
//    cardsContainer.innerHTML += teamList[i].role;
//    cardsContainer.innerHTML += teamList[i].image;
//}

//BONUS
const cardsContainer = document.getElementById('cards-container');
for (i = 0; i < teamList.length; i++) {
    const card = teamList[i];
    cardsContainer.innerHTML += `
    <div class="col-4 mb-5">
        <article class="my_card">
            <img class="img-fluid card-image mb-3" src="assets/images/${card.image}" alt="${card.name}'s picture">
            <div class="card-description p-2">
                <h3 class='card-name mb-1'>
                    ${card.name}
                </h3>
                <p class='card-role mb-3'>
                    ${card.role}
                </p>
            </div>
        </article>
    </div>`;
}
