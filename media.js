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

function addComment() {
          var input = document.getElementById("commentInput");
          var newComment = input.value;
          if (newComment) { // Check if the comment is not empty
              var commentSection = document.getElementById("commentSection");
              var newCommentDiv = document.createElement("div");
              newCommentDiv.textContent = newComment;
              commentSection.appendChild(newCommentDiv);
              input.value = ""; // Clear the input field after adding the comment
          }
      };