import likeSend from './likesend.js';

import getLike from './getlike.js';

const enableButton = () => {
  const likebuttons = document.querySelectorAll('.likebutton');
  likebuttons.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const identity = e.target.parentNode.id;
      await likeSend(identity);
      getLike();
    });
  });
};

export default enableButton;