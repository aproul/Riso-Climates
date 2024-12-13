const numSquares = 5;
const squares = [];
const body = document.body;
let mouseX = 0;
let mouseY = 0;

// Array of GIF URLs (replace with your own GIFs or use online URLs)
const gifs = [
    'MOUNTAIN-draft.gif', // Square 1
    'OCEAN-animation.gif', // Square 2
    'CACTI-animation.gif', // Square 3
    'RAIN-animation.gif', // Square 4
    'INFORMATION.gif',  // Square 5
];

// Function to check if a position overlaps with an existing square
function isOverlap(x, y) {
    return squares.some(square => {
        const rect = square.getBoundingClientRect();
        return x < rect.right && x + 100 > rect.left && y < rect.bottom && y + 100 > rect.top;
    });
}

// Function to generate random positions within the screen, checking for overlap
function getRandomPosition() {
    let x, y;
    const maxX = window.innerWidth - 100;  // max position for square's left edge
    const maxY = window.innerHeight - 100; // max position for square's top edge
    do {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
    } while (isOverlap(x, y));  // Regenerate position if overlap occurs
    return { x, y };
}

// Create squares and add event listeners for click
for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    const { x, y } = getRandomPosition();
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
    square.style.backgroundImage = `url(${gifs[i]})`;  // Set the background GIF for each square
    square.setAttribute('data-link', `page${i + 1}.html`); // Link for each square

    square.addEventListener('click', function () {
        window.location.href = square.getAttribute('data-link');
    });

    document.body.appendChild(square);
    squares.push(square);
}

// Mouse move effect to make perspective follow the cursor
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    mouseX = clientX;
    mouseY = clientY;

    // Adjust the translation to create a 3D effect based on mouse position
    const maxOffset = 40; // Maximum offset for perspective effect
    const deltaX = (mouseX / window.innerWidth) - 0.5;  // Range [-0.5, 0.5]
    const deltaY = (mouseY / window.innerHeight) - 0.5; // Range [-0.5, 0.5]

    // Apply the 3D translation effect to the body based on mouse position
    body.style.transform = `translate3d(${deltaX * maxOffset}px, ${deltaY * maxOffset}px, 0)`;
});

// Update squares' positions when clicked with smooth transition
body.addEventListener('click', () => {
    squares.forEach(square => {
        const newPosition = getRandomPosition();
        square.style.left = `${newPosition.x}px`;
        square.style.top = `${newPosition.y}px`;
    });
});
