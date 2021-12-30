const Web3 = require("web3");

const web3 = new Web3("");

const abi = require("./abi");
const address = 0xec2f88796deecd6720a122ea7438984459e49d86;

const tradeContract = new web3.eth.Contract(abi, address);

tradeContract.events
  .ExecuteBid({}, function (error, event) {
    if (error) console.error("Error!");
  })
  .on("data", function (data) {
    let result = data.returnValues;
    let previousOwner = result["assetOwner"];
    let tokenID = result["tokenId"];
    let quantity = result["quantity"];
    let buyer = result["buyer"];
  });

tradeContract.events
  .BuyAsset({}, function (error, event) {
    if (error) console.error("Error!");
  })
  .on("data", function (data) {
    let result = data.returnValues;
    let previousOwner = result["assetOwner"];
    let tokenID = result["tokenId"];
    let quantity = result["quantity"];
    let buyer = result["buyer"];
  });

module.exports = { tradeContract };
