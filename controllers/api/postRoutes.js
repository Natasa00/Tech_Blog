// Creating the route for the comment
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edit a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const results = await Post.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (results.affectedRows > 0) {
      res.status(200).json(newPost);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (postData === 0) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
