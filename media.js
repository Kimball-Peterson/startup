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

  document.querySelectorAll('.postComment').forEach(button => {
    button.addEventListener('click', function() {
        addComment(this);
    });
  });

  var likeButton = document.querySelector('.like_button');
  var likeCountDisplay = document.querySelector('.like_count');

  likeButton.addEventListener('click', function() {
      var currentCount = parseInt(likeCountDisplay.textContent, 10);
      likeCountDisplay.textContent = currentCount + 1;
  });

  loadComments();
});

function addComment(button) {
  var commentInput = button.previousElementSibling;
  var parentTile = button.closest('.reads_tile, .media_tile');
  var commentSection = parentTile.querySelector('.commentSection');
  var newComment = commentInput.value;
  if (newComment) {
      var parentTile = button.closest('.reads_tile, .media_tile');
      var tileId = parentTile ? parentTile.getAttribute('data-tile-id') : 'default';
      var newCommentDiv = document.createElement("div");
      newCommentDiv.textContent = newComment;
      commentSection.appendChild(newCommentDiv);
      commentInput.value = ""; 

      var comments = JSON.parse(localStorage.getItem('comments')) || {};
      if (!comments[tileId]) comments[tileId] = [];
      comments[tileId].push(newComment);
      localStorage.setItem('comments', JSON.stringify(comments));
  }
}

function loadComments() {
  var comments = JSON.parse(localStorage.getItem('comments')) || {};
  document.querySelectorAll('.reads_tile, .media_tile').forEach(tile => {
      var tileId = tile.getAttribute('data-tile-id');
      var commentSection = tile.querySelector('.commentSection');
      if (comments[tileId]) {
          comments[tileId].forEach(comment => {
              var newCommentDiv = document.createElement("div");
              newCommentDiv.textContent = comment;
              commentSection.appendChild(newCommentDiv);
          });
      }
  });
}


/*document.addEventListener('DOMContentLoaded', () => {
    
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

    document.querySelectorAll('.postComment').forEach(button => {
        button.addEventListener('click', function() {
            addComment(this);
        });
    });
    var likeButton = document.querySelector('.like_button');
    var likeCountDisplay = document.querySelector('.like_count');

    likeButton.addEventListener('click', function() {
      var currentCount = parseInt(likeCountDisplay.textContent, 10);
      likeCountDisplay.textContent = currentCount + 1;
    });

    loadComments();
  });

function addComment(button) {
          /*var input = document.getElementsByClassName("commentInput");
          var newComment = input.value;
          if (newComment) { 
              var commentSection = document.getElementsByClassName("commentSection");
              var newCommentDiv = document.createElement("div");
              newCommentDiv.textContent = newComment;
              commentSection.appendChild(newCommentDiv);
              input.value = ""; 

              //local storage
              var comments = JSON.parse(localStorage.getItem('comments')) || [];
              comments.push(newComment);
              localStorage.setItem('comments', JSON.stringify(comments));
          }

      var commentInput = button.previousElementSibling;
      var commentSection = button.nextElementSibling;
      var newComment = commentInput.value;
      if (newComment) {
        var tileId = button.closest('.reads_tile').getAttribute('data-tile-id');

        var newCommentDiv = document.createElement("div");
        newCommentDiv.textContent = newComment;
        commentSection.appendChild(newCommentDiv);
        commentInput.value = ""; 

        // Local storage logic 
        var comments = JSON.parse(localStorage.getItem('comments')) || [];
        if(!comments[tileId]) comments[tileId] = []; 
        comments[tileId].push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));   
    }
}

function loadComments() {
  var comments = JSON.parse(localStorage.getItem('comments')) || [];
  document.querySelectorAll('reads_tile').forEach(tile => {
    var tileId = tile.getAttribute('data-tile-id');
    var commentSection = tile.querySelector('.commentSection');
    if(comments[tileId]) {
      comments[tileId].forEach(comment => {
        var newCommentDiv = document.createElement("div");
        newCommentDiv.textContent = comment;
        commentSection.appendChild(newCommentDiv);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
        var likeButton = document.querySelector('.like_button');
        var likeCountDisplay = document.querySelector('.like_count');
      
        likeButton.addEventListener('click', function() {
          var currentCount = parseInt(likeCountDisplay.textContent, 10);
          likeCountDisplay.textContent = currentCount + 1;
        });

        var commentSections = document.getElementsByClassName("commentSection");
        if (commentSections.length > 0) {
            var comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.forEach(function(comment) {
                var commentDiv = document.createElement("div");
                commentDiv.textContent = comment;
                commentSections[0].appendChild(commentDiv);            
            });
        }
    });*/