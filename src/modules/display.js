import enableButton from './enablebuttons.js';

const counter = () => {
  const display = document.querySelector('#chickencounter');
  const sections = document.querySelectorAll('.section');
  display.innerHTML = `(${sections.length})`;
};

const display = (array) => {
  const container = document.querySelector('#maincontainer');
  array.forEach((item) => {
    container.innerHTML += `<section class="section">
    <img class="mainimage" src=${item.strMealThumb} alt=${item.strMeal}>
    <div class="nameandlikes">
    <h2 class="mealname">${item.strMeal}</h2>
    <div class="likesdiv">
    <button id="like${item.idMeal}" class="likebutton" type="button">
    <ion-icon class="heart" name="heart-outline"></ion-icon>
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
  counter();
};

export default display;