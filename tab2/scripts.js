const logo = document.querySelector('.logo');
const logoText = document.querySelector('.logo-text', '.logo-text1', '.logo-text2');
// Initial position and increased speed
let positionX = 0;
let positionY = 0;
let speedX = 4; // 10 times faster than the previous speed
let speedY = 4; // 10 times faster than the previous speed

function animateLogo() {
  // Update the logo's position
  positionX += speedX;
  positionY += speedY;

  // Update the logo's style
  logo.style.left = positionX + 'px';
  logo.style.top = positionY + 'px';

  // Screen boundaries
  const maxX = window.innerWidth - logo.offsetWidth;
  const maxY = window.innerHeight - logo.offsetHeight;

  // Check for collisions with screen boundaries
  if (positionX <= 0 || positionX >= maxX) {
    speedX = -speedX; // Reverse horizontal direction
  }

  if (positionY <= 0 || positionY >= maxY) {
    speedY = -speedY; // Reverse vertical direction
  }

  // Request the next animation frame
  requestAnimationFrame(animateLogo);
}

// Start animation loop
animateLogo();
