// // model
// let bankDatabase = [];

// class bankModel {
//   constructor(name, address, location, accountNumber) {
//     this.name = name;
//     this.address = address;
//     this.location = location;
//     this.accountNumber = accountNumber;
//   }

//   createBank() {
//     bankDatabase.push(this);
//   }
//   static all() {
//     return bankDatabase;
//   }

//   static update(arg) {
//     let updatedBank;
//     bankDatabase = bankDatabase.map((bank) => {
//       if (bank.name === arg.name) {
//         updatedBank = bank;
//         return { ...bank, ...arg };
//       }
//       return bank;
//     });
//     return updatedBank;
//   }

//   static delete(arg) {
//     let deletedBank;
//     bankDatabase = bankDatabase.filter((bank) => {
//       if (bank.name === arg) {
//         deletedBank = bank;
//         // return bank;
//       }
//       return bank.name !== arg;
//     });
//     return deletedBank;
//   }
// }

// module.exports = bankModel;

const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  account: {
    type: Number,
    // required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  address: {
    type: String,
    Number,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  location: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
});

module.exports = mongoose.model("Bank", bankSchema);
