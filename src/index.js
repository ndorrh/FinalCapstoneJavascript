import './style.css';
import fetcher from './modules/fetcher.js';
import getLike from './modules/getlike.js';
import './modules/addComment.js';

window.addEventListener('load', () => {
  fetcher();
  getLike();
});