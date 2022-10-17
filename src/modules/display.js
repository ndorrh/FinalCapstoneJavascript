const display = (array) => {
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

export default display;