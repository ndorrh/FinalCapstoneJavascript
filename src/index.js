import './style.css';

const display = (array) => {
  console.log(array);
  const container = document.querySelector('#maincontainer');
  array.forEach((item) => {
    container.innerHTML += `<section class="section">
    <img class="mainimage" src=${item.strMealThumb} alt=${item.strMeal}>
    <h2>${item.strMeal}</h2>
    <div class="buttonholder">
    <button class="comments button" id=${item.idMeal} type="button">Comments</button>
    <button class="reservations button" id=${item.idMeal} type="button">Reservations</button>
    </div>
    </section>`;
  });
};

const fetcher = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast', {
    method: 'GET',
  });
  const result = response.json();
  result.then((object) => display(object.meals));
};

window.addEventListener('load', () => {
  fetcher();
});