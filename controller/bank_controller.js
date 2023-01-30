const bankModel = require("../model/bank_model");
const Bank = require("../model/bank_model");
const asyncWrapper = require("../middlewares/async");
const { creatNewError } = require("../error/customError");

const getAllBanks = asyncWrapper(async function (req, res) {
  const banks = await Bank.find({});
  res.status(200).json({ banks });
});

const createBank = asyncWrapper(async (req, res) => {
  const bank = await Bank.create(req.body);
  res.status(201).json({ bank });
});

const getSingleBank = asyncWrapper(async (req, res, next) => {
  const { id: bankId } = req.params;
  const bank = await Bank.findById({ _id: bankId });
  if (!bank) {
    return next(creatNewError(`No resource found with id:${bankId}`, 404));
  }
  res.status(200).json({ bank });
});
const updateBank = asyncWrapper(async (req, res, next) => {
  const { id: bankId } = req.params;
  const bank = await Bank.findOneAndUpdate({ _id: bankId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bank) {
    return next(creatNewError(`No resource found with id:${bankId}`, 404));
  }
  res.status(200).json({ bank });
});

const deleteBank = asyncWrapper(async (req, res, next) => {
  const { id: bankId } = req.params;

  const bank = await Bank.findOneAndDelete({ _id: bankId });
  if (!bank) {
    return next(creatNewError(`No resource found with id:${bankId}`, 404));
  }
});

module.exports = {
  getAllBanks,
  getSingleBank,
  updateBank,
  deleteBank,
  createBank,
};
