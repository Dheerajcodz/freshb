const express = require("express");
const router = express.Router();

const { dummyLink } = require("../controllers/likeControllers");
const { createComment } = require("../controllers/commentControllers");

// const { createPost } = require("../controllers/postController");
const { createPost, getAllPosts } = require("../controllers/postController");
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.get("/getpost", getAllPosts);
router.post("/posts/create", createPost);
module.exports = router;
