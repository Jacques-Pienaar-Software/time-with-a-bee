const bee = document.querySelector(".bee");
const beeContainer = document.querySelector(".bee-container");

// Function to create a dotted trail
function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  beeContainer.appendChild(trail);

  // Remove trail after animation
  setTimeout(() => {
    trail.remove();
  }, 2000); // Matches the fadeOut animation duration
}

// Update bee position as user scrolls
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Calculate bee's S-pattern motion
  const xPosition = window.innerWidth - (scrollY % window.innerWidth); // Move from right to left
  const yPosition =
    (scrollY % window.innerHeight) + Math.sin(scrollY / 100) * 100; // Vertical sinusoidal motion

  // Move bee
  bee.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

  // Create a trail at the bee's current position
  createTrail(xPosition + 15, yPosition + 15); // Offset to center the trail
});
