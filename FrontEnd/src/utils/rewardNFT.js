import React, { useEffect, useState } from "react";
import Walk100 from '../images/wmb100.PNG';
import Walk500 from '../images/wmb500.PNG';
import Walk1000 from '../images/wmb1000.PNG';
//import Walk10000 from '../images/wmb10000.PNG';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';



const  RewardNFT =  () => {
   
    const [has100, setHas100] = useState('');
    const [has500, setHas500] = useState('');
    const [has1000, setHas1000] = useState('');
    //const [has10000, setHas10000] = useState('');

    async function populateRewardTokens(){
        const accounts = await web3.eth.getAccounts();
        const reward100 = await token.methods.has100km(accounts[0]).call();
        const reward500 = await token.methods.has500km(accounts[0]).call();
        const reward1000 = await token.methods.has1000km(accounts[0]).call();
        //const reward10000 = await token.methods.has10000km(accounts[0]).call();
        setHas100(reward100);
        setHas500(reward500);
        setHas1000(reward1000);
        // setHas10000(reward10000);

    }

    useEffect(() => {
        populateRewardTokens();
    }, [])

    if(has100){
        if(has500){
            if(has1000){
                return (<div>
                    <div style={{display: 'flex', flexWrap: 'wrap' }}>
                        <div>
                            <img src={Walk100} alt="walk" height='200'/>
                        </div>
                        <div>
                            <img src={Walk500} alt="walk" height='220'/>
                        </div>
                        <div>
                            <img src={Walk1000} alt="walk" height='200'/>
                        </div>
                    </div>
                </div>)
            }
            return(<div>
               <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div>
                            <img src={Walk100} alt="walk" height='200'/>
                        </div>
                        <div>
                            <img src={Walk500} alt="walk" height='220'/>
                        </div>
                        
                    </div>
            </div>)
        }
        return (
            <div>
                <img src={Walk100} alt="walk" height='200'/>
            </div>
        )
    }else{
        return (
            <div>
                <p>walk a cummulative 100km to earn your first token</p>
            </div>
        )
    }
    
}
export default RewardNFT;