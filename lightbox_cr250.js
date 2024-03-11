document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox-modal');
    const images = document.querySelectorAll('.gallery-img');
    const modalImg = document.getElementById('lightbox-image');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementById('close-modal');
  
    images.forEach(img => {
      img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      };
    });
  
    closeModal.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
