const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

//reads
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

let posts = [
    { id: 1, title: "2002 or 2023? Kinkade Pavich's Works CR250R", content: "Article content here..." },
    { id: 2, title: "The Crawler Camper. Stellar Built's LC80", content: "Article content here..." }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    const post = { id: posts.length + 1, title: req.body.title, content: req.body.content };
    posts.push(post);
    res.status(201).send(post);
});

app.put('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index >= 0) {
        posts[index] = { ...posts[index], title: req.body.title, content: req.body.content };
        res.send(posts[index]);
    } else {
        res.status(404).send();
    }
});

app.delete('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index >= 0) {
        posts = posts.filter(p => p.id !== parseInt(req.params.id));
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

