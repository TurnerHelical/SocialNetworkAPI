// Imports
const router = require("express").Router();


const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");


router.route("/").get(getThoughts).post(createThought);


router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);


router.route("/:thoughtId/reactions").post(addReaction);


router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Exports
module.exports = router;
