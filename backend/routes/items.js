const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const checkRoleMiddleware = require("../middlewares/checkRole");

const {
  getAllItems,
  getItem,
  insertNewItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

// router.route("/").get(authMiddleware, checkRoleMiddleware("admin"), getAllItems);

router.route("/").get(getAllItems);
router.route("/:id").get(getItem);
router.route("/update/:id").patch(updateItem);
// router.route("/insert").post(authMiddleware, checkRoleMiddleware("admin"),insertNewItem);
router.route("/insert").post(insertNewItem);
router.route("/delete/:id").delete(deleteItem);

module.exports = router;
