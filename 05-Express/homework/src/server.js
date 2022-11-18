// const bodyParser = require("body-parser");
const express = require("express");
//const bodyParser = require("body-parser");

const STATUS_USER_ERROR = 422;
// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
var postsId = 0;
const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
server.post('/posts', (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    res
      .status(STATUS_USER_ERROR)
      .json({
        error: "No se recibieron los parámetros necesarios para crear el Post",
      });
  } else {
    const newPost = {
      author,
      title,
      contents,
      id: postsId
    }
    posts.push(newPost);
    postsId++;
    server.json(newPost);
  }
})

server.post("/posts/author/:author", (req, res) => {
  const { title, contents } = req.body;
  const { author } = res.params;
  
  if (!title || !contents || !author) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    })
  } else {
    const newPost = {
      author,
      title,
      contents,
      id: postsId
    };
    posts.push(newPost);
    postsId++;
    res.json(newPost);
  }
});

server.get('/posts', (req, res) => {
  const { term } = req.query;

  if (term) {
    const values = posts.filter(e => e.title.includes(term) || e.contents.includes(term));
    res.json(values);
  } else {
    res.json(posts);
  }
})


module.exports = { posts, server };
