const likeShow = (array) => {
  const myArray = array.filter((object) => object.item_id !== '');
  console.log(myArray);
  myArray.forEach((object) => {
    const likes = document.querySelector(`#count${object.item_id}`);
    if (object.likes === null) {
      likes.innerHTML = '0 Likes';
    } else {
      likes.innerHTML = `${object.likes} Likes`;
    }
  });
};

const getLike = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/likes/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => likeShow(json));
};

window.addEventListener('load', () => {
  getLike();
});

const likeSend = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
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
  const likebuttons = document.querySelectorAll('.likebutton');
  likebuttons.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const identity = e.target.parentNode.id;
      await likeSend(identity);
      getLike();
    });
  });
};

export default display;