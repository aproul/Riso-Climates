const bookElement = document.getElementById('book');
const imagePaths = [
    'information slices/Info_01.jpg', 'information slices/info_02.jpg', 'information slices/info_03.jpg', 'information slices/info_04.jpg','information slices/info_05.jpg', 'information slices/info_06.jpg', 'information slices/info_07.jpg', 'information slices/info_08.jpg', 'information slices/info_09.jpg', 'information slices/info_10.jpg', 'information slices/info_11.jpg', 'information slices/info_12.jpg',  'information slices/info_x.jpg',
   
];

const pages = [];

for (let i = 0; i < 13; i++) {
    const page = document.createElement('div');
    page.classList.add('page');
    
    const content = document.createElement('div');
    content.classList.add('page-content');
    
    const img = document.createElement('img');
    img.src = imagePaths[i];  // Set the source for the image
    img.alt = `Page ${i + 1}`;
    img.style.width = '100%';  // Ensure the image takes full page width
    img.style.height = '100%'; // Ensure the image takes full page height
    
    content.appendChild(img);  // Append the image to the page content
    page.appendChild(content);  // Append content to the page
    pages.push(page);  // Add page to the array
    bookElement.appendChild(page);  // Add page to the book container
}

let currentPage = 1;
const totalPages = 13;

function updatePages() {
    // Reset all pages first
    pages.forEach(page => {
        page.classList.remove('show', 'flipped', 'previous', 'next');
        page.style.transform = ''; // Reset transform
    });

    // Show current page and next/previous page
    const currentPageElement = pages[currentPage - 1];
    const previousPageElement = pages[currentPage - 2];
    const nextPageElement = pages[currentPage];

    // Show the current page
    currentPageElement.classList.add('show');
    currentPageElement.style.transform = 'rotateY(0deg)';

    // Handle next page
    if (nextPageElement && currentPage < totalPages) {
        nextPageElement.classList.add('next');
        nextPageElement.style.transform = 'rotateY(0deg)';
    }

    // Handle previous page
    if (previousPageElement && currentPage > 1) {
        previousPageElement.classList.add('previous');
        previousPageElement.style.transform = 'rotateY(180deg)';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown' && currentPage < totalPages) {
        currentPage++;
        updatePages();
    } else if (event.key === 'ArrowUp' && currentPage > 1) {
        currentPage--;
        updatePages();
    }
});

// Initial display setup
updatePages();

// Get the close button element
const closeButton = document.getElementById('closeButton');

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
    window.location.href = 'index.html';  // Redirect to the homepage (replace '/' with the appropriate URL if necessary)
});