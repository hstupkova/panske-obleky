'use strict';

console.log('funguju');

const product = document.querySelector('#product-image');
const whiteButton = document.querySelector('.color-option__box--white');
const blackButton = document.querySelector('.color-option__box--black');
const redButton = document.querySelector('.color-option__box--red');
const blueButton = document.querySelector('.color-option__box--blue');
const colorOption = document.querySelector('color-option');

const changeColor = (event) => {
  event.target.classList.add('color-option__chosen--product');
  console.log(event);
  if (
    event.target.className ===
    'color-option__box color-option__box--white color-option__chosen--product'
  ) {
    product.style = 'fill: white';
    blackButton.classList.remove('color-option__chosen--product');
    redButton.classList.remove('color-option__chosen--product');
    blueButton.classList.remove('color-option__chosen--product');
  } else if (
    event.target.className ===
    'color-option__box color-option__box--black color-option__chosen--product'
  ) {
    product.style = 'fill: black';
    whiteButton.classList.remove('color-option__chosen--product');
    redButton.classList.remove('color-option__chosen--product');
    blueButton.classList.remove('color-option__chosen--product');
  } else if (
    event.target.className ===
    'color-option__box color-option__box--red color-option__chosen--product'
  ) {
    product.style = 'fill: #953232';
    whiteButton.classList.remove('color-option__chosen--product');
    blackButton.classList.remove('color-option__chosen--product');
    blueButton.classList.remove('color-option__chosen--product');
  } else {
    product.style = 'fill: skyblue';
    whiteButton.classList.remove('color-option__chosen--product');
    blackButton.classList.remove('color-option__chosen--product');
    redButton.classList.remove('color-option__chosen--product');
  }
};

const colorButtons = document.querySelectorAll('.color-option__box');
for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', changeColor);
}
