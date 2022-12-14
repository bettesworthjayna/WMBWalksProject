import NFT from '../EtherConnect/NFT';
import web3 from '../EtherConnect/web3';
import {
    URI_5km, URI_10km, URI_25km, URI_50km, URI_75km, URI_100km, URI_150km,
    URI_200km, URI_250km, URI_300km, URI_350km, URI_375km, URI_400km, URI_450km,
    URI_500km, URI_600km, URI_700km, URI_800km, URI_900km, URI_1000km

} from './uris';

//When mining tokens, this functions determines the amount of new tokens needed to be mined 
//based of the amount of km that they have ran
export const giveNFT = async (reward) => {
    const accounts = await web3.eth.getAccounts();
    console.log('hello')
    if (reward == 5){
        await NFT.methods.anyoneMint(accounts[0], URI_5km).send({
            from: accounts[0],
        });
    }else if (reward == 10){
        await NFT.methods.anyoneMint(accounts[0], URI_10km).send({
            from: accounts[0],
        });

    }else if (reward == 25){
        await NFT.methods.anyoneMint(accounts[0], URI_25km).send({
            from: accounts[0],
        });
    }else if (reward == 50){
        await NFT.methods.anyoneMint(accounts[0], URI_50km).send({
            from: accounts[0],
        });
    }else if (reward == 75){
        await NFT.methods.anyoneMint(accounts[0], URI_75km).send({
            from: accounts[0],
        });
    }else if (reward == 100){
        await NFT.methods.anyoneMint(accounts[0], URI_100km).send({
            from: accounts[0],
        });
    }else if (reward == 150){
        await NFT.methods.anyoneMint(accounts[0], URI_150km).send({
            from: accounts[0],
        });
    }else if (reward == 200){
        await NFT.methods.anyoneMint(accounts[0], URI_200km).send({
            from: accounts[0],
        });
    }else if (reward == 250){
        await NFT.methods.anyoneMint(accounts[0], URI_250km).send({
            from: accounts[0],
        });
    }else if (reward == 300){
        await NFT.methods.anyoneMint(accounts[0], URI_300km).send({
            from: accounts[0],
        });
    }else if (reward == 350){
        await NFT.methods.anyoneMint(accounts[0], URI_350km).send({
            from: accounts[0],
        });
    }else if (reward == 400){
        await NFT.methods.anyoneMint(accounts[0], URI_400km).send({
            from: accounts[0],
        });
    }else if (reward == 450){
        await NFT.methods.anyoneMint(accounts[0], URI_450km).send({
            from: accounts[0],
        });
    }else if (reward == 500){
        await NFT.methods.anyoneMint(accounts[0], URI_500km).send({
            from: accounts[0],
        });
    }else if (reward == 600){
        await NFT.methods.anyoneMint(accounts[0], URI_600km).send({
            from: accounts[0],
        });
    }else if (reward == 700){
        await NFT.methods.anyoneMint(accounts[0], URI_700km).send({
            from: accounts[0],
        });
    }else if (reward == 800){
        await NFT.methods.anyoneMint(accounts[0], URI_800km).send({
            from: accounts[0],
        });
    }else if (reward == 900){
        await NFT.methods.anyoneMint(accounts[0], URI_900km).send({
            from: accounts[0],
        });
    }else if (reward == 1000){
        await NFT.methods.anyoneMint(accounts[0], URI_1000km).send({
            from: accounts[0],
        });
    }else{
        console.log(reward )
    }
    

}