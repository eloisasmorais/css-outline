const container = document.querySelector('.container');
const textMoveLeft = document.querySelector('.top .move-left');
const outlineMoveLeft = document.querySelector('.outline .move-left');
const textMoveRight = document.querySelector('.top .move-right');
const outlineMoveRight = document.querySelector('.outline .move-right');

container.addEventListener('mousemove', function (event) {
  let xPos = event.clientX;

  textMoveLeft.style.transform = `translateX(${xPos * -0.15}px)`;
  outlineMoveLeft.style.transform = `translateX(${xPos * -0.15}px)`;
  textMoveRight.style.transform = `translateX(${xPos * 0.15}px)`;
  outlineMoveRight.style.transform = `translateX(${xPos * 0.15}px)`;
});
