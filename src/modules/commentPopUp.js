const commentPopUp = document.getElementById('meal-details');
const render = (meal) => {
  const PopUpbody = `
                    <div class="image-container" style="background-image:url(${meal[0].strMealThumb})"></div>
                    <h2 class="meal-name">${meal[0].strMeal}</h2>
                    <div class="category-ingredients-wrapper">
                    <p id="category">
                      <span class=category">Category: </span>
                      ${meal[0].strCategory}
                    </p>
                    <button type="button">Ingredients and Measurement(s)</button>
                    </div>
                    <p class="cooking-instruction">
                      <span class=instruction">Cooking Instructions: </span>
                      ${meal[0].strInstructions}
                    </p>
                 <div id="links"> 
                    <a id="source" href=${meal[0].strSource}>View Source</a>
                    <a id="youtube-link" href=${meal[0].strYoutube}>Watch on youtube</a>
                 </div>`;

  return PopUpbody;
};

const getData = async (id) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((rawData) => rawData.json())
    .then((mealData) => {
      console.log(mealData);
      commentPopUp.innerHTML += render(mealData.meals);
    });
};

export { render, commentPopUp, getData };