// Creating sponsors Element In js
const instructors = [
  {
    name: 'Tim Urban',
    position: 'Writer at Wait But Why',
    about: 'With Wait But Why, Tim Urban demonstrates that complex and long-form writing can stand out in an online wilderness choked with listicles and clickbait.',
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
  {
    name: 'Stacey Abrams',
    position: 'Former Georgia House Democratic Leader',
    about: "Stacey Abrams's 2018 campaign for governor of Georgia turned more voters than any Democrat in Georgia history, including former ",
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
  {
    name: 'Jose Antonio',
    position: 'José Antonio Abreu founded El Sistema in 1975 ',
    about: 'In Venezuela, the gulf between rich and poor is one of the starkest in the world. José Antonio Abreu -- economist, musician and reformer -- founded El Sistema',
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
  {
    name: 'Thomas Abt',
    position: 'Thomas Abt developed an innovative, evidence-informed model',
    about: 'A senior fellow at the Council on Criminal Justice, Thomas Abt is a leading expert on reducing urban violence. In his book Bleeding Out: The Devastating Consequences',
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
  {
    name: 'Aziz Abu Sarah',
    position: 'Aziz Abu Sarah helps people break down cultural and historical barriers through tourism.',
    about: 'When Aziz Abu Sarah was a boy, his older brother was arrested on charges of throwing stones. He was taken to prison and beaten ',
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
  {
    name: 'Leyla Acaroglu',
    position: 'Leyla Acaroglu uses innovative design and systems thinking to create positive change.',
    about: 'Leyla Acaroglu breaks through our deeply entrenched environmental folklore in order to reveal the true impact of the products and materials we use every day.',
    imageURL: 'https://thumbs.dreamstime.com/b/old-man-suit-talking-portrait-senior-caucasian-businessman-white-isolated-background-old-man-suit-talking-113566335.jpg',
  },
];

const cardsContainer = document.querySelector('.instructors');

function createCards(cardsData = instructors) {
  const cards = document.createElement('div');
  cards.className = 'cards';
  cardsData.forEach((e) => {
    const card = document.createElement('div');
    card.className = 'card';
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-contain';
    const img = document.createElement('img');
    img.className = 'card-img';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const bodyTitle = document.createElement('h5');
    bodyTitle.className = 'card-title';
    bodyTitle.innerText = e.name;
    const bodyTextTitle = document.createElement('p');
    bodyTextTitle.className = 'card-text1';
    bodyTextTitle.innerText = e.position;
    const bodyTextDescription = document.createElement('p');
    bodyTextDescription.className = 'card-text2';
    bodyTextDescription.innerText = e.about;

    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyTextTitle);
    cardBody.appendChild(bodyTextDescription);

    img.src = e.imageURL;
    imgContainer.appendChild(img);

    card.appendChild(imgContainer);
    card.appendChild(cardBody);
    cards.appendChild(card);

    cardsContainer.appendChild(cards);
  });
}
window.onload = () => {
  createCards();
};