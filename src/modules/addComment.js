const commentBtn = document.getElementById('commentBtn');
const previousComment = document.getElementById('prev-comments');
const userName = document.getElementById('name');
const comment = document.getElementById('comment');

const getDataFromInvolvementApi = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TUbnIqBO6HOTZf6v0kyK/comments?item_id=15')
    .then((rawData) => rawData.json())
    .then((commentData) => {
      previousComment.innerHTML = '';
      commentData.forEach((message, index) => {
        previousComment.innerHTML += `<li class="comment-prev">${commentData[index].creation_date} ${commentData[index].username}: ${commentData[index].comment} </li>`;
      });
    });
};

const sendData = async () => {
  const data = {
    item_id: 15,
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

  getDataFromInvolvementApi();

  userName.value = '';
  comment.value = '';
};

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (userName.value !== '' && comment.value !== '') {
    sendData();
  }
});