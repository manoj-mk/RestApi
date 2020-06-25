const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
// get or receive
router.get("/:title", async (req, res) => {
  try {
    const posts = await Post.find({ title: req.params.title });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//add or insert or post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/:title", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ title: req.params.title });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//update
router.patch("/:title", async (req, res) => {
    try {
      const patchedPost = await Post.updateOne({ title: req.params.title },{$set:{title:req.body.title }});
      res.json(patchedPost);
    } catch (error) {
      res.json({ message: error });
    }
  });
  

module.exports = router;
