const express = require("express");
const {
  deleteBank,
  getAllBanks,
  createBank,
  updateBank,
  getSingleBank,
} = require("../controller/bank_controller");

const router = express.Router();

router.route("/").get(getAllBanks).post(createBank);
router.route("/:id").get(getSingleBank).patch(updateBank).delete(deleteBank);
module.exports = router;
