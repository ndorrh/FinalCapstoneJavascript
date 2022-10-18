import likeSend from './likesend.js';

import getLike from './getlike.js';

const enableButton = () => {
  const likebuttons = document.querySelectorAll('.likebutton');
  likebuttons.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const heart = e.target.querySelector('.heart');
      heart.setAttribute('name', 'heart');
      button.classList.add('pressed');
      await likeSend(e.target.id);
      getLike();
    },
    {
      once: true,
    });
  });
};

export default enableButton;