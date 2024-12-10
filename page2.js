const bookElement = document.getElementById('book');
const imagePaths = [
    'oceanslices/ocean-pg-01.PNG', 'oceanslices/ocean-pg-02.PNG', 'oceanslices/ocean-pg-03.PNG', 'oceanslices/ocean-pg-04.PNG', 
    'oceanslices/ocean-pg-05.PNG', 'oceanslices/ocean-pg-06.PNG', 'oceanslices/ocean-pg-07.PNG', 'oceanslices/ocean-pg-08.PNG',
    'oceanslices/ocean-pg-09.PNG', 'oceanslices/ocean-pg-10.PNG', 'oceanslices/ocean-pg-11.PNG', 'oceanslices/ocean-pg-12.PNG',
    'oceanslices/ocean-pg-13.PNG', 'oceanslices/ocean-pg-14.PNG', 'oceanslices/ocean-pg-15.PNG', 'oceanslices/ocean-pg-16.PNG',
    'oceanslices/ocean-pg-17.PNG', 'oceanslices/ocean-pg-18.PNG', 'oceanslices/ocean-pg-19.PNG', 'oceanslices/ocean-pg-20.PNG',
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
        window.location.href = 'download/OCEANprint.pdf'; doc.save("download/OCEANprint.pdf");
});