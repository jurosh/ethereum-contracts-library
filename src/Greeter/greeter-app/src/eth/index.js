import Web3 from "web3";
import { abi } from "./contract";

let contract;

export const initialize = () =>
  new Promise((resolve, reject) => {
    if (typeof window.web3 !== "undefined") {
      const web3 = new Web3(window.web3.currentProvider);
      // http://web3js.readthedocs.io/en/1.0/index.html
      console.log(web3);

      web3.eth.getAccounts().then(accounts => {
        if (!accounts || accounts.length === 0) {
          return reject("cannot find account, locked?");
        }

        const account = accounts[0];

        const tokenContractAddress =
          "0x7ddfa27b04656d73a1565d83bd10ed28d89a9e56";
        contract = new web3.eth.Contract(abi, tokenContractAddress, {
          from: account
        });
        console.log(contract);
        resolve(contract);
      });
    } else {
      // set the provider you want from Web3.providers
      reject("No provider");
      // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  });

const reject = () => Promise.reject("[eth] Not intialized contract");

export const greet = () => contract ? contract.methods.greet().send() : reject();
export const psstGreet = () => contract ? contract.methods.psstGreet().call() : reject();
export const howManyGreets = () => contract ? contract.methods.howManyGreets().call() : reject();

export const gasEstimate = (method) => {
  if(!contract || !contract.methods[method]) {
    return reject();
  }
  return contract.methods[method]().estimateGas();
}


