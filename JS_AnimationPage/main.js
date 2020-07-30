const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#Logo');
const owl = document.querySelector('.owl');
const headline = document.querySelector('.headline');


/*TimeLineMax*/
const tl = new TimelineMax();

tl.fromTo(hero, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut})
.fromTo(hero, 2, {width: '100%'}, {width:"80%", ease: Power2.easeInOut})
.fromTo(slider, 2, {x: '-100%'}, {x : '0%', ease: Power2.easeInOut}, "-=2")
.fromTo(logo, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0 }, "-=0.8")
.fromTo(owl, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0 }, "-=0.8");