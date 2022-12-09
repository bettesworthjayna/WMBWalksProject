import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';
import { giveNFT } from './giveNFTs';
import emailjs from '@emailjs/browser';


//When mining tokens, this functions determines the amount of new tokens needed to be mined 
//based of the amount of km that they have ran
export const mineTokens = async (amount) => {
    const accounts = await web3.eth.getAccounts();
    const OGBalance = await token.methods.balanceOf(accounts[0]).call();
    const mineAmount = amount - OGBalance;
    const startDate = await token.methods.startDate(accounts[0]).call();
    const name = await token.methods.personName(accounts[0]).call();

    let template = {
        winner: name,
        address: accounts[0],
        distance: 0,
        prize: ''
    }
    const sendEmail = (event) => {
        //event.preventDefault();
        emailjs.send('service_tjfqsmn', "template_jifwumz", template, 'ZmBxIKxePuGqxLVxP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              console.log(error + "   ");
          });
      };

    if(startDate == 0){
        await token.methods.mint(0).send({
            from: accounts[0],
        });
        return "Thanks for signing up for WMB walks! Record your next Walk / Run / Hike on Strava to earn tokens";
    }
    if (mineAmount > 0){
        await token.methods.mint(mineAmount).send({
            from: accounts[0],
        });

    }else if (mineAmount < 0) {
        await token.methods.burn(-1 * mineAmount).send({
            from: accounts[0],
        });
        return "No new km recorded since last logged in. "
    }else{
        return"No new km recorded since last logged in. "
    }
    const AfterBalance = await token.methods.balanceOf(accounts[0]).call();
    if(AfterBalance < 500){
        
        return `Congrats, you have ran ${mineAmount/100} km since you've last checked in`
    }
    if(AfterBalance >= 500 && OGBalance < 500){
        if (AfterBalance >= 1000){
            await giveNFT(10);

            await giveNFT(5);
            return "Congrats, you have walked a cumulative of 10km. You have recieved the 5km and the 10km NFT!"
        }
        await giveNFT(5);
            // template.distance = 5;
            // template.prize = "woohoo"
            // sendEmail();
         return "Congrats, you have walked a cumulative of 5km. You have recieved the 5km NFT!"
    }
    if(AfterBalance >= 1000 && OGBalance < 1000){
        await giveNFT(10);
        return "Congrats, you have walked a cumulative of 10km. You have recieved the 10km NFT"
    }
    
    if(AfterBalance >= 2500 && OGBalance < 2500){
        await giveNFT(25);
        return "Congrats! You have walked more than 25km total!  You have recieved the 25km NFT"
    }
    if (AfterBalance >= 5000 && OGBalance <5000){
        await giveNFT(50);
        return "Congrats! You have walked more than 50km total!  You have recieved the 50km NF"
    }
    if (AfterBalance >= 7500 && OGBalance < 7500){
        await giveNFT(75);
        return "Congrats! You have walked more than 75km total! You have earned the 75km NFT "
    }
    if (AfterBalance >= 10000 && OGBalance < 10000){
        await giveNFT(100);
        return "Congrats! You have walked more than 100km total! You have earned the 100km NFT"
    }
    if (AfterBalance >= 15000 && OGBalance < 15000){
        await giveNFT(150);
        return "Congrats! You have walked more than 150km total! You have earned the 150km NFT "
    }
    if (AfterBalance >= 20000 && OGBalance < 20000){
        await giveNFT(200);
        return "Congrats! You have walked more than 200km total!  You have recieved the 200km NF"
    }
    if (AfterBalance >= 25000 && OGBalance < 25000){
        await giveNFT(250);

        template.distance = 250;
        template.prize = "a water bottle"
         sendEmail();
        return (<div><h3>Congrats! You have walked more than 250km total! You have earned the 250km NFT </h3><p>Now you can qualify to earn a Water Bottle by the end of April. Continue to run or walk to earn running shoe or vacation day instead!</p></div>)
    }
    if (AfterBalance >= 30000 && OGBalance < 30000){
        await giveNFT(300);
        return "Congrats! You have walked more than 300km total! You have earned the 300km NFT "
    }
    if (AfterBalance >= 35000 && OGBalance < 35000){
        await giveNFT(350);
        return "Congrats! You have walked more than 350km total! You have earned the 350km NFT "
    }
    if (AfterBalance >= 40000 && OGBalance < 40000){
        await giveNFT(400);
        return "Congrats! You have walked more than 400km total! You have earned the 400km NFT "
    }
     if (AfterBalance >= 45000 && OGBalance < 45000){
        await giveNFT(450);
        return "Congrats! You have walked more than 450km total! You have earned the 450km NFT"
    }

     if (AfterBalance >= 50000 && OGBalance < 50000){
        await giveNFT(500);
        template.distance = 500;
        template.prize = "A pair of running shoes or a Yoga Mat"
         sendEmail();
        return  (<div><h3>Congrats! You have walked more than 500km total! You have earned the 500km NFT</h3><p>now you can qualify to earn a Yoga Mat or running shoes by the end of April. Continue to run or walk to earn vacation day instead!</p></div>)
    }
     if (AfterBalance >= 60000 && OGBalance < 60000){
        await giveNFT(600);
        return "Congrats! You have walked more than 600km total! You have earned a 600km NFT"
    }
    if (AfterBalance >= 70000 && OGBalance < 70000){
        await giveNFT(700);
        return "Congrats! You have walked more than 700km total! You have earned a 700km NFT"
    }
    if (AfterBalance >= 80000 && OGBalance < 80000){
        await giveNFT(800);
        return "Congrats! You have walked more than 800km total! You have earned a 800km NFT"
    }
    if (AfterBalance >= 90000 && OGBalance < 90000){
        await giveNFT(900);
        return "Congrats! You have walked more than 900km total! You have earned a 900km NFT"
    }
    if (AfterBalance >= 100000 && OGBalance < 100000){
        await giveNFT(1000);
        template.distance = 1000;
        template.prize = "a Vacation Day"
         sendEmail();
        return (<div><h3>Congrats! You have walked more than 1000km total! You have earned a 1000km NFT</h3><p>Now you can qualify to earn a Vacation day</p></div>)
    }
    return `Congrats, you have walked ${mineAmount/100} since you last logged in`
}