// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

interface IERC20 {
    //total supply of the coin. when minted goes up, when burnt goes down
    function totalSupply() external view returns (uint); 

    //the balance or amount of coins an account has
    function balanceOf (address account) external view returns (uint);

    //transfer your coins to another account
    function transfer (address recipient, uint amount) external returns (bool);
    
    //returns the amount of tokens that the spender is allowed to spend on the owners expence. This amount is set by approve function 
    function allowance(address owner, address spender) external view returns (uint);

    //approve a specific sender to send a specified amount of money on your behalf
    function approve(address spender, uint amount) external returns (bool);

    //transfermoney from one account to another if permitted to do so. 
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);

    //transfer event
    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);
}

contract wmbToken is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "WMBWalks";
    string public symbol = "WMB";
    uint8 public decimals = 2;

    //these are functions specifically for this contract

    mapping(address => string) public personName;
    mapping(address => string) public stravaID;
    mapping(address => string) public stravaSecret;

    //reward system

    mapping(address => bool) public has100km;
    mapping(address => bool) public has500km; 
    mapping(address => bool) public has1000km; 

    //have state variables for totalSupply, balanceOf, and allowances so dont need function calls. 
    //these functions are simple enough and the solidity compiler recognises then as commands

    function transfer (address recipient, uint amount) external returns (bool){
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool){
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint amount) external returns (bool){
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    //create new tokens
    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
        if (balanceOf[msg.sender] >= 10000){
            if (has100km[msg.sender] == false){
            give100kmToken();
            }else if (balanceOf[msg.sender] >= 50000){
                if(has500km[msg.sender] == false){
                    give500kmToken();
                }else if (balanceOf[msg.sender] >= 100000){
                    if(has1000km[msg.sender] == false){
                        give1000kmToken();
                    }
                }
            }
        }
    }

    //delete tokens from existance
    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }

    function setPersonName(string calldata person) external {
        personName[msg.sender] = person;
    }

    function setStravaInfo(string calldata user, string calldata pword) external {
        stravaID[msg.sender] = user;
        stravaSecret[msg.sender] = pword;
    }


    function setName(string calldata Pname) external{
        personName[msg.sender] = Pname;
    }

    //giving out rewards:
    function give100kmToken() internal{
        require(balanceOf[msg.sender] > 10000);
        require(has100km[msg.sender] == false);
            has100km[msg.sender] = true;
    }

    function give500kmToken() internal{
        require(balanceOf[msg.sender] > 50000);
        require(has500km[msg.sender] == false);
            has500km[msg.sender] = true;
    }

    function give1000kmToken() internal{
        require(balanceOf[msg.sender] > 100000);
        require(has1000km[msg.sender] == false);
            has1000km[msg.sender] = true;
    }

}