const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const routes = require("./routes/bank_routes");

// database
// model
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
//         return bank;
//       }
//       return bank.name !== arg;
//     });
//     return deletedBank;
//   }
// }

// handlers || controllers
// const handleBankPostRequest = (req, res) => {
//   const { name, address, location, accountNumber } = req.body;
//   let bank = new bankModel(name, address, location, accountNumber);
//   bank.createBank();
//   res.json({ message: "Message sent succesfully", data: bank });
// };

// const handleBankGetRequest = function (req, res) {
//   const listBank = bankModel.all();
//   res.json({ msg: "Collection Successful", data: listBank });
// };

// const handleBankPutRequest = (req, res) => {
//   const { name, address, location, accountNumber } = req.body;
//   const updatedBank = bankModel.update({
//     name,
//     address,
//     location,
//     accountNumber,
//   });
//   res.json({ msg: "Changes made succesfully", data: updatedBank });
// };

// const handleBankDeleteRequest = (req, res) => {
//   const { name } = req.body;
//   const deletedBank = bankModel.delete(name);
//   res.json({ msg: "Deleted succesfully", data: deletedBank });
// };

// middlewares
server.use(bodyParser.json());
server.use("/bank", routes);
// // routes
// server.get("/bank", handleBankGetRequest);
// server.post("/bank", handleBankPostRequest);
// server.put("/bank", handleBankPutRequest);
// server.delete("/bank", handleBankDeleteRequest);

server.listen(3000, () => console.log("server is ready"));
