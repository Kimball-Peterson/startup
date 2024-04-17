// Get elements
document.addEventListener('DOMContentLoaded', (event) => {
    
const modal = document.getElementById('lightbox-modal');
const images = document.querySelectorAll('.gallery-img');
const modalImg = document.getElementById('lightbox-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close-modal');

// Open 
images.forEach(img => {
  img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Close button

closeModal.onclick = function() {
  modal.style.display = 'none';
}

// Close outside

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
});