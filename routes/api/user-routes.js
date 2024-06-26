// Imports
const router = require("express").Router();


const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");


router.route("/").get(getUsers).post(createUser);


router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);


router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports
module.exports = router;