const display = (array) => {
  const container = document.querySelector('#maincontainer');
  array.forEach((item) => {
    container.innerHTML += `<section class="section">
    <img class="mainimage" src=${item.strMealThumb} alt=${item.strMeal}>
    <div class="nameandlikes">
    <h2 class="mealname">${item.strMeal}</h2>
    <div class="likesdiv">
    <button class="likebutton" type="button">
    <ion-icon class="heart" name="heart-outline"></ion-icon>
    </button>
    <p>Likes</p>
    </div>
    </div>
    <div class="buttonholder">
    <button class="comments button" id=${item.idMeal} type="button">Comments</button>
    </div>
    </section>`;
  });
};

export default display;