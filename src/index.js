import './style.css';

import fetcher from './modules/fetcher.js';

import './modules/addComment.js';

window.addEventListener('load', () => {
  fetcher();
});
