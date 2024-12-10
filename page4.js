const bookElement = document.getElementById('book');
const imagePaths = [
    'rainslices/rain-slice-01.jpg', 'rainslices/rain-slice-02.jpg', 'rainslices/rain-slice-03.jpg', 'rainslices/rain-slice-04.jpg', 
    'rainslices/rain-slice-05.jpg', 'rainslices/rain-slice-06.jpg', 'rainslices/rain-slice-07.jpg', 'rainslices/rain-slice-08.jpg',
    'rainslices/rain-slice-09.jpg', 'rainslices/rain-slice-10.jpg', 'rainslices/rain-slice-11.jpg', 'rainslices/rain-slice-12.jpg',
    'rainslices/rain-slice-13.jpg', 'rainslices/rain-slice-14.jpg', 'rainslices/rain-slice-15.jpg', 'rainslices/rain-slice-16.jpg',
    'rainslices/rain-slice-17.jpg', 'rainslices/rain-slice-18.jpg', 'rainslices/rain-slice-19.jpg', 'rainslices/rain-slice-20.jpg',
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
    window.location.href = 'download/RAINprint.pdf'; doc.save("download/RAINprint.pdf");
});