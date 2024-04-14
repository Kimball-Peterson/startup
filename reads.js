document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.querySelector('.reads_p');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });
    });
});

function deletePost(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Post deleted');
        location.reload(); // Reload the page to update the list
    });
}
//post
document.getElementById('createPost').addEventListener('click', function() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, content: content })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Post created!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//put
function updatePost(postId) {
    const title = document.getElementById('updateTitle').value;
    const content = document.getElementById('updateContent').value;

    fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, content: content })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Update successful:', data);
        alert('Post updated!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

//delete
function deletePost(postId) {
    fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Post deleted');
        alert('Post deleted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

