const router = require("express").Router();
const {} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
