const express = require("express");
const {
  handleBankDeleteRequest,
  handleBankGetRequest,
  handleBankPostRequest,
  handleBankPutRequest,
} = require("../controller/bank_controller");

const router = express.Router();

router
  .route("/")
  .get(handleBankGetRequest)
  .post(handleBankPostRequest)
  .put(handleBankPutRequest)
  .delete(handleBankDeleteRequest);

module.exports = router;
