// to evade using Cloud Storage or fs & Multer or third-party API  with multipart/form-data
// Convert images to Base64 data URLs

export function setUploadButton(element) {
    const images = []; 
    const fileInput = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    // Listen for file selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // Add the Base64 image to the array
                images.push(reader.result);
            };
        }
    });

    // Handle the Upload button click
    element.addEventListener('click', () => {
        // Clear the gallery first
        gallery.innerHTML = '';
        // Add each image from the array to the gallery
        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Uploaded Image ${index + 1}`;
            img.style.maxWidth = '200px';
            img.style.margin = '10px';
            gallery.appendChild(img);
        });
    });
}
