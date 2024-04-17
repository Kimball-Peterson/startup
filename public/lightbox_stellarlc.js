document.addEventListener('DOMContentLoaded', function() {
    // Get the image and insert it inside the modal
    var img = document.querySelector('.responsive'); // Selects the first image with class 'responsive'
    var modal = document.getElementById('lightbox-modal');
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    var closeModal = document.getElementById("close-modal");

    // When the image is clicked, open the modal
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        // Optional: Use the alt attribute of the image as caption
        captionText.innerHTML = this.alt;
    }

    
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
});