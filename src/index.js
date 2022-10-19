import logo from './images/logo.png';
import './style.css';
import fetcher from './modules/fetcher.js';
import getLike from './modules/getlike.js';
import './modules/addComment.js';

const logoholder = document.querySelector('#logoimg');

logoholder.src = logo;

window.addEventListener('load', () => {
  fetcher();
  getLike();
});