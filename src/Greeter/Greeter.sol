pragma solidity ^0.4.24;

/**
 Based on https://www.ethereum.org/greeter

 Mortal = contract can be killed by its owner, to clean up the blockchain and recover funds locked into it when the contract is no longer needed
 Contracts in ethereum are, by default, immortal and have no owner, meaning that once deployed the author has no special privileges anymore.
 Consider this before deploying.
*/
contract Mortal {
    /* Define variable owner of the type address */
    address owner;

    /* This function is executed at initialization and sets the owner of the contract */
    constructor() public { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() private { if (msg.sender == owner) selfdestruct(owner); }
}

/**
 Greeter will say what you create it with!
 Also will be counting all greet() calls
 Call psstGreet() to get uncounted greeting.
 */
contract Greeter is Mortal {
    /* Define variable greeting of the type string */
    string greeting;

    /* Store how many times was greet() called */
    uint calledTimes;

    /* This runs when the contract is executed */
    constructor(string _greeting) public {
        greeting = _greeting;
    }

    function greet() public returns (string) {
        calledTimes += 1;
        return greeting;
    }

    function psstGreet() public view returns (string) {
        return greeting;
    }

    function howManyGreets() public view returns (uint) {
        return calledTimes;
    }
}
