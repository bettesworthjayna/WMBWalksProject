import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';


export const mineTokens = async (amount) => {
    const accounts = await web3.eth.getAccounts();
    const OGBalance = await token.methods.balanceOf(accounts[0]).call();
    const mineAmount = amount - OGBalance;
    if (mineAmount > 0){
        await token.methods.mint(mineAmount).send({
            from: accounts[0],
        });
    }else{
        return "No new km recorded since last logged in. "
    }
    const AfterBalance = await token.methods.balanceOf(accounts[0]).call();
    if(AfterBalance < 10000){
        return `Congrats, you have ran ${mineAmount/100} km since you've last checked in`
    }
    if(AfterBalance > 10000 && OGBalance < 10000){
        return "Congrats! You have walked more than 100 total! You now have a free waterbottle NFT and can cash it in at any time"
    }
    if (AfterBalance > 50000 && OGBalance <50000){
        return "Congrats! You have walked more than 500 total! You now have a free comfy socks NFT and can cash it in at any time!"
    }
    if (AfterBalance > 100000 && OGBalance < 100000){
        return "Congrats! You have walked more than 1000 total! You now have a free lunch NFT and can cash it in at any time! "
    }
    return `Congrats, you have walked ${mineAmount/100} since you last logged in`
}