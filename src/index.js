import './style.css';

import fetcher from './modules/fetcher.js';

import { getData } from './modules/commentPopUp.js';

getData(53016);

window.addEventListener('load', () => {
  fetcher();
});

