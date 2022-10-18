import { getData } from './commentPopUp.js';
import { commentCounter } from './commentCounter.js';

const commentWrapper = document.getElementById('comment-popup');
const previousComment = document.getElementById('prev-comments');
const userName = document.getElementById('name');
const comment = document.getElementById('comment');
const commentPopUpContainer = document.getElementById('body');
const mealsDatails = document.getElementById('meal-details');
const maincontainer = document.getElementById('maincontainer');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const closeBtn = document.getElementById('closeBtn');

const getDataFromInvolvementApi = async (mealId) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments?item_id=${mealId}`)
    .then((rawData) => rawData.json())
    .then((commentData) => {
      previousComment.innerHTML = '';
      commentData.forEach((message, index) => {
        previousComment.innerHTML += `<li class="comment-prev">${commentData[index].creation_date} ${commentData[index].username}: ${commentData[index].comment} </li>`;
      });
      commentCounter(commentData);
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

let id = 0;
// Add event listener to booth Add comment button and comment button on home page
commentPopUpContainer.addEventListener('click', (e) => {
  const btnId = parseInt(e.target.id, 10);
  if (e.target.classList.contains('comments')) {
    commentWrapper.classList.remove('hiden');
    commentWrapper.style.display = 'flex';
    maincontainer.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
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

// Adding Event listener to close button on comment Popup
closeBtn.addEventListener('click', () => {
  commentWrapper.classList.add('hiden');
  maincontainer.style.display = 'flex';
  header.style.display = 'flex';
  footer.style.display = 'flex';
});
