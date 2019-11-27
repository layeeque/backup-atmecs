import json
import web3

from web3 import Web3
from solc import compile_source
from web3.contract import ConciseContract

# Solidity source code
contract_source_code = '''
pragma solidity ^0.4.21;

contract Greeter {
    string public greeting;

    function Greeter() public {
        greeting = 'Hello';
    }

    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

    function greet() view public returns (string) {
        return greeting;
    }
}
'''


