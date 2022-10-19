/**
 * @jest-environment jsdom
 */

import itemcounter from '../src/modules/itemcounter.js';

describe('itemcounter tests', () => {
  it('one section', () => {
    document.body.innerHTML = '<div class="itemcounter" id="chickencounter"></div><section class="section"></section>';
    const display = document.querySelector('#chickencounter');
    itemcounter();
    expect(display.innerHTML).toBe('(1)');
  });
  it('no sections', () => {
    document.body.innerHTML = '<div class="itemcounter" id="chickencounter"></div>';
    const display = document.querySelector('#chickencounter');
    itemcounter();
    expect(display.innerHTML).toBe('(0)');
  });
  it('nine sections', () => {
    document.body.innerHTML = '<div class="itemcounter" id="chickencounter"></div>';
    let i = 0;
    while (i < 9) {
      document.body.innerHTML += '<section class="section"></section>';
      i += 1;
    }
    const display = document.querySelector('#chickencounter');
    itemcounter();
    expect(display.innerHTML).toBe('(9)');
  });
});