document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.querySelector('.reads_p');
        // Clear existing posts
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('reads_tile');
            postElement.setAttribute('data-tile-id', `tile${post.id}`);
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <input type="text" id="updateTitle${post.id}" placeholder="New Title">
                <input type="text" id="updateContent${post.id}" placeholder="New Content">
                <button onclick="updatePost(${post.id})">Update Post</button>
                <button onclick="deletePost(${post.id})">Delete Post</button>
            `;
            postsContainer.appendChild(postElement);
        });
    });
});

function updatePost(postId) {
    const title = document.getElementById(`updateTitle${postId}`).value;
    const content = document.getElementById(`updateContent${postId}`).value;

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

function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) { 
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                
                const postElement = document.querySelector(`div[data-tile-id='tile${postId}']`);
                if (postElement) {
                    postElement.remove();
                }
                alert('Post deleted successfully!');
            } else {
                alert('Failed to delete the post.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error deleting the post.');
        });
    }
}

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
    .then(post => {
        console.log('Success:', post);
        displayPost(post); 
        document.getElementById('postTitle').value = ''; 
        document.getElementById('postContent').value = ''; 
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to create post');
    });
});

function displayPost(post) {
    const postsContainer = document.querySelector('.reads_p');
    const postElement = document.createElement('div');
    postElement.classList.add('reads_tile');
    postElement.setAttribute('data-tile-id', `tile${post.id}`);
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button onclick="updatePost(${post.id})">Update Post</button>
        <button onclick="deletePost(${post.id})">Delete Post</button>
    `;
    postsContainer.appendChild(postElement);
}