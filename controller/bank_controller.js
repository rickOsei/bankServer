const bankModel = require("../model/bank_model");

const handleBankPostRequest = (req, res) => {
  const { name, address, location, accountNumber } = req.body;
  let bank = new bankModel(name, address, location, accountNumber);
  bank.createBank();
  res.json({ message: "Message sent succesfully", data: bank });
};

const handleBankGetRequest = function (req, res) {
  const listBank = bankModel.all();
  res.json({ msg: "Collection Successful", data: listBank });
};

const handleBankPutRequest = (req, res) => {
  const { name, address, location, accountNumber } = req.body;
  const updatedBank = bankModel.update({
    name,
    address,
    location,
    accountNumber,
  });
  res.json({ msg: "Changes made succesfully", data: updatedBank });
};

const handleBankDeleteRequest = (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  const deletedBank = bankModel.delete(name);
  res.json({ msg: "Deleted succesfully", data: deletedBank });
};

module.exports = {
  handleBankDeleteRequest,
  handleBankGetRequest,
  handleBankPostRequest,
  handleBankPutRequest,
};
