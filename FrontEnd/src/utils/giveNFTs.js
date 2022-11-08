import NFT from '../EtherConnect/NFT';
import web3 from '../EtherConnect/web3';
import { URI_10000kms, URI_1000km, URI_500km, URI_100km, URI_10km, URI_5km } from './uris';

//When mining tokens, this functions determines the amount of new tokens needed to be mined 
//based of the amount of km that they have ran
export const giveNFT = async (reward) => {
    const accounts = await web3.eth.getAccounts();
    console.log('hello')
    if (reward == 5){
        console.log('hi?')
        await NFT.methods.anyoneMint(accounts[0], URI_5km).send({
            from: accounts[0],
        });
        console.log('did it work?')
    }else if (reward == 10){
        await NFT.methods.anyoneMint(accounts[0], URI_10km).send({
            from: accounts[0],
        });
    }else if (reward == 100){
        await NFT.methods.anyoneMint(accounts[0], URI_100km).send({
            from: accounts[0],
        });
    }else if (reward == 500){
        await NFT.methods.anyoneMint(accounts[0], URI_500km).send({
            from: accounts[0],
        });
    }else if (reward == 1000){
        await NFT.methods.anyoneMint(accounts[0], URI_1000km).send({
            from: accounts[0],
        });
    }else if (reward == 10000){
        await NFT.methods.anyoneMint(accounts[0], URI_10000kms).send({
            from: accounts[0],
        });
    }else{
        console.log(reward + " Whaaaaa")
    }
    

}