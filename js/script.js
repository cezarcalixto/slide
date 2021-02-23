import SlideNav from './slide.js';

const slide = new SlideNav ('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.next', '.prev');
slide.addControl('.custom-controls');
console.log(slide)