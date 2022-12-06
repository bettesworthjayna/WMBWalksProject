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

contract wmbFit is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "WMBFit";
    string public symbol = "WMB";
    uint8 public decimals = 2;
    mapping(address => uint) public startDate;
    
    uint8 public numberOfUsers = 0;
    address[] public allUsers;

    //these are functions specifically for this contract

    mapping(address => string) public personName;
    
    struct scores{
        address accountAddress;
        string accountName;
        uint distance;
    }

      scores[10] public leaders;
    //have state variables for totalSupply, balanceOf, and allowances so dont need function calls. 
    //these functions are simple enough and the solidity compiler recognises then as commands

    function transfer (address recipient, uint amount) external returns (bool){
        require(amount <= 10, "Maximum transfer of 0.1");
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns (bool){
        require(amount <= 100,  "Maximum approval of 1");
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

     function setPersonName(string calldata person) external {
        personName[msg.sender] = person;
    }

    function transferFrom(address sender, address recipient, uint amount) external returns (bool){
        require(amount <= 10,  "Maximum transfer of 0.1");
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    //create new tokens
    function mint(uint amount) external {
        if(balanceOf[msg.sender] == 0 && startDate[msg.sender] == 0){
            startDate[msg.sender] = block.timestamp;
            allUsers.push(msg.sender);
            numberOfUsers++;
            return;
        }
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
        updateLeaderBoard(balanceOf[msg.sender], msg.sender);
    }

    function updateLeaderBoard(uint newDistance, address accountAdd) internal {
        scores memory cur = scores({accountAddress : accountAdd, accountName: personName[accountAdd], distance: newDistance});
        uint8 i = 0;
        while(i < 10){
            if(leaders[i].accountAddress == accountAdd){
                leaders[i] = cur;
                return;
            }
            if(leaders[i].distance < cur.distance){
                scores memory temp = leaders[i];
                leaders[i] = cur;
                cur = temp;
            }
            i++;
        }
    }



    //delete tokens from existance
    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
        downgradeLeader(balanceOf[msg.sender], msg.sender);
    }
    
    function downgradeLeader(uint newDistance, address accountAdd) private {
        scores memory cur = scores({accountAddress : accountAdd, accountName: personName[accountAdd], distance: newDistance});
        uint8 i = 9;
        while(i >= 0){
            if(leaders[i].accountAddress == accountAdd){
                leaders[i] = cur;
                return;
            }
            if(leaders[i].distance > cur.distance){
                scores memory temp = leaders[i];
                leaders[i] = cur;
                cur = temp;
            }
            i--;
        }
    }
    

    function setName(string calldata Pname) external{
        personName[msg.sender] = Pname;
    }

    function setStartDate() external{
        require(startDate[msg.sender] == 0); //so that the if they already set a start date, they dont reset a new one. 
        startDate[msg.sender] = block.timestamp; 
    }

}