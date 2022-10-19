import likeSend from './likesend.js';

import getLike from './getlike.js';

const enableButton = () => {
  const likebuttons = document.querySelectorAll('.likebutton');
  likebuttons.forEach((button) => {
    const item = window.localStorage.getItem(button.id);
    if (item === null) {
      button.addEventListener('click', async (e) => {
        const heart = e.target.querySelector('.heart');
        const likecount = document.querySelector(`#count${e.target.id}`);
        likecount.style.color = 'rgb(255, 200, 200)';
        heart.setAttribute('name', 'heart');
        button.classList.add('pressed');
        await likeSend(e.target.id);
        getLike();
        window.localStorage.setItem(`${e.target.id}`, 'clicked');
      },
      {
        once: true,
      });
    } else if (item === 'clicked') {
      const heart = button.querySelector('.heart');
      const likecount = document.querySelector(`#count${button.id}`);
      likecount.style.color = 'rgb(255, 200, 200)';
      heart.setAttribute('name', 'heart');
      button.classList.add('pressed');
    }
  });
};

export default enableButton;