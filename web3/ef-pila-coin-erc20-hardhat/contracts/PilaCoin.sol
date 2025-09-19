// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract PilaCoin {
    string public name = 'PilaCoin';
    string public symbol = 'PLC';
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000 * 10 ** decimals;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
}
