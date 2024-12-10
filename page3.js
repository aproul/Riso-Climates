const bookElement = document.getElementById('book');
const imagePaths = [
    'cacti slices/cacti-slice-01.jpg', 'cacti slices/cacti-slice-02.jpg', 'cacti slices/cacti-slice-03.jpg', 'cacti slices/cacti-slice-04.jpg', 
    'cacti slices/cacti-slice-05.jpg', 'cacti slices/cacti-slice-06.jpg', 'cacti slices/cacti-slice-07.jpg', 'cacti slices/cacti-slice-08.jpg',
    'cacti slices/cacti-slice-09.jpg', 'cacti slices/cacti-slice-10.jpg', 'cacti slices/cacti-slice-11.jpg', 'cacti slices/cacti-slice-12.jpg',
    'cacti slices/cacti-slice-13.jpg', 'cacti slices/cacti-slice-14.jpg', 'cacti slices/cacti-slice-15.jpg', 'cacti slices/cacti-slice-16.jpg',
    'cacti slices/cacti-slice-17.jpg', 'cacti slices/cacti-slice-18.jpg', 'cacti slices/cacti-slice-19.jpg', 'cacti slices/cacti-slice-20.jpg',
];

const pages = [];

for (let i = 0; i < 20; i++) {
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
const totalPages = 20;

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


printButton.addEventListener('click', function () {
    window.location.href = 'download/CACTIprint.pdf'; doc.save("download/CACTIprint.pdf");
});