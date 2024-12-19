import './style.css';
// If the event handling is not centralized, there can be issues with dynamically created buttons because event listeners are typically not automatically attached to new elements added to the DOM after the initial page load.
// With event delegation, you attach a single listener to a common ancestor (e.g., document, gallery, or another static container). This listener monitors all events bubbling up from its child elements and dynamically determines which specific element triggered the event.

// Global array to store images
const images = [];

// Initialize the application
document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <input type="file" id="imageUpload" accept="image/*">
      <button id="uploadButton">Upload</button>
    </div>
    <div id="gallery">
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  // Centralized event listener for all interactions
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Handle upload button click
    if (target.id === 'uploadButton') {
      renderGallery(gallery);
    }

    // Handle delete button click
    if (target.classList.contains('btn-delete')) {
      const index = target.getAttribute('data-index');
      deleteImage(index, gallery);
    }
  });

  // File input change listener
  const fileInput = document.getElementById('imageUpload');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Add the Base64 image to the global array
        images.push(reader.result);
      };
    }
  });
});

// Function to handle the delete functionality
function deleteImage(index, gallery) {
  // Remove the image from the `images` array
  images.splice(index, 1);

  // Re-render the gallery to reflect changes
  renderGallery(gallery);
}

// Function to render the gallery
function renderGallery(gallery) {
  gallery.innerHTML = ''; // Clear the gallery

  // Add each image from the array to the gallery
  images.forEach((image, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.innerHTML = `
      <img src="${image}" alt="Uploaded Image ${index + 1}" style="max-width: 200px; margin: 10px;">
      <button class="btn-delete" data-index="${index}">Delete</button>
    `;
    gallery.appendChild(imageContainer);
  });
}
