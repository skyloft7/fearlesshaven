document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    fetch('/artwork') // Fetch the list of image files from the server
        .then(response => response.json())
        .then(data => {
            data.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Artwork';
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error fetching artwork:', error);
        });
});