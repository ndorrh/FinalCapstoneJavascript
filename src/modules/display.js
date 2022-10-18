import enableButton from './enablebuttons.js';

import itemcounter from './itemcounter.js';

const display = (array) => {
  const container = document.querySelector('#maincontainer');
  array.forEach((item) => {
    container.innerHTML += `<section class="section">
    <img class="mainimage" src=${item.strMealThumb} alt=${item.strMeal}>
    <div class="nameandlikes">
    <h2 class="mealname">${item.strMeal}</h2>
    <div class="likesdiv">
    <button id="like${item.idMeal}" class="likebutton" type="button" title="Like">
    <ion-icon id="heart${item.idMeal}" class="heart" name="heart-outline"></ion-icon>
    </button>
    <p id="countlike${item.idMeal}"></p>
    </div>
    </div>
    <div class="buttonholder">
    <button class="comments button" id=${item.idMeal} type="button">Comments</button>
    </div>
    </section>`;
  });
  enableButton();
  itemcounter();
};

export default display;