import { getData } from './commentPopUp.js';

const commentBtn = document.getElementById('commentBtn');
const previousComment = document.getElementById('prev-comments');
const userName = document.getElementById('name');
const comment = document.getElementById('comment');

const getDataFromInvolvementApi = async (mealId) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments?item_id=${mealId}`)
    .then((rawData) => rawData.json())
    .then((commentData) => {
      previousComment.innerHTML = '';
      commentData.forEach((message, index) => {
        previousComment.innerHTML += `<li class="comment-prev">${commentData[index].creation_date} ${commentData[index].username}: ${commentData[index].comment} </li>`;
      });
    });
};

const sendData = async (mealId) => {
  const data = {
    item_id: mealId,
    username: userName.value,
    comment: comment.value,
  };

  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  getDataFromInvolvementApi(mealId);

  userName.value = '';
  comment.value = '';
};


const commentPopUpContainer = document.getElementById('body');
const mealsDatails = document.getElementById('meal-details');

let id = 0;
commentPopUpContainer.addEventListener('click', (e) => {
  const btnId = parseInt(e.target.id, 10);
  if (e.target.classList.contains('comments')) {
    getDataFromInvolvementApi(btnId);
    mealsDatails.innerHTML = '';
    getData(btnId);
    id = btnId;
  } else if (e.target.classList.contains('cmtBtn')) {
    if (userName.value !== '' && comment.value !== '') {
      sendData(id);
    }
  }
});



//commentBtn.addEventListener('click', (e) => {
  //e.preventDefault();
 
//});
