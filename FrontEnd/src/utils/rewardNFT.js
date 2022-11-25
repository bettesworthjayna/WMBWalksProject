import React, { useEffect, useState } from "react";
import Walk5 from '../images/5kmWMB.PNG';
import Walk10 from '../images/10kmWMB.PNG'
import Walk100 from '../images/100kmWMB.PNG';
import Walk500 from '../images/500kmWMB.PNG';
import Walk1000 from '../images/1000kmWMB.PNG';
import Walk10000 from '../images/10000kmWMB.PNG';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';


//reterns images for the reward tokens that the user has. 
const  RewardNFT =  () => {
   const [balance, setBalance] = useState(0);
    // const [has5, setHas5] = useState('');
    // const [has10, setHas10] = useState('');
    // const [has100, setHas100] = useState('');
    // const [has500, setHas500] = useState('');
    // const [has1000, setHas1000] = useState('');
    // const [has10000, setHas10000] = useState('');
    let accountActive = true;
    async function populateRewardTokens(){
        try{
        
        const accounts = await web3.eth.getAccounts();
        const balance = await token.methods.balanceOf(accounts[0]).call();
        setBalance(balance);
        // const reward5 = await token.methods.has5km(accounts[0]).call();
        // const reward10 = await token.methods.has10km(accounts[0]).call();
        // const reward100 = await token.methods.has100km(accounts[0]).call();
        // const reward500 = await token.methods.has500km(accounts[0]).call();
        // const reward1000 = await token.methods.has1000km(accounts[0]).call();
        // const reward10000 = await token.methods.has10000km(accounts[0]).call();
        // setHas5(reward5);
        // setHas10(reward10);
        // setHas100(reward100);
        // setHas500(reward500);
        // setHas1000(reward1000);
        // setHas10000(reward10000);
        }catch (err){
            console.log(err);
            accountActive = false;
        }
    }

    useEffect(() => {
        populateRewardTokens();
    }, [])

    if(!accountActive){
        return (
            <div>
                <h2>Make sure your metamask is connected. Add the extension or find the pop up</h2>
            </div>
        )
    }else if(balance >= 1000000){
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div>
                        <hr/>
                        <img  src={Walk5} height='150' alt="walk 5" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk10} height='150' alt="walk 10" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk1000} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk10000} height='150' alt="walk 10000" />
                        
                    </div>
            </div>
        )
    }else if(balance >= 100000){
            return(
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <div>
                            <hr/>
                            <img  src={Walk5} height='150' alt="walk 5" />
                            
                        </div>
                        <div>
                            <hr/>
                            <img  src={Walk10} height='150' alt="walk 10" />
                            
                        </div>
                        <div>
                            <hr/>
                            <img  src={Walk100} height='150' alt="walk 100" />
                            
                        </div>
                        <div>
                            <hr/>
                            <img  src={Walk500} height='150' alt="walk 500" />
                            
                        </div>
                        <div>
                            <hr/>
                            <img  src={Walk1000} height='150' alt="walk 1000" />
                           
                        </div>
                </div>
            )

        }else if(balance >= 50000){
                return(
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <div>
                                <hr/>
                                <img  src={Walk5} height='150' alt="walk 5" />
                                
                            </div>
                            <div>
                                <hr/>
                                <img  src={Walk10} height='150' alt="walk 10" />
                                
                            </div>
                            <div>
                                <hr/>
                                <img  src={Walk100} height='150' alt="walk 100" />
                                
                            </div>
                            <div>
                                <hr/>
                                <img  src={Walk500} height='150' alt="walk 500" />
                                
                            </div>
                            
                    </div>
                )
        }else if(balance >= 10000){
                    return(
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <div>
                                    <hr/>
                                    <img  src={Walk5} height='150' alt="walk 5" />
                                    
                                </div>
                                <div>
                                    <hr/>
                                    <img  src={Walk10} height='150' alt="walk 10" />
                                    
                                </div>
                                <div>
                                    <hr/>
                                    <img  src={Walk100} height='150' alt="walk 100" />
                                    
                                </div>
                                
                        </div>
                    )
    }else if(balance >= 1000){
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div>
                        <hr/>
                        <img  src={Walk5} height='150' alt="walk 5" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk10} height='150' alt="walk 10" />
                        
                    </div>
                    
            </div>
        )
    }else if(balance >= 500 ){
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div>
                        <hr/>
                        <img  src={Walk5} height='150' alt="walk 5" />
                        
                    </div> 
            </div>
        )
    }else{

        return (
            <div>
                <p>Walk a cumulative 5km to earn your first NFT</p>
            </div>
        )
    }
    
}
export default RewardNFT;