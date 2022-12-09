import React, { useEffect, useState } from "react";
import Walk5 from '../images/PNGs/5km.PNG';
import Walk10 from '../images/ChangedPNGs/10km.PNG';
import Walk25 from '../images/PNGs/25km.PNG'
import Walk50 from '../images/ChangedPNGs/50km.PNG'
import Walk75 from '../images/PNGs/75km.PNG'
import Walk100 from '../images/ChangedPNGs/100km.PNG';
import Walk150 from '../images/PNGs/150km.PNG'
import Walk200 from '../images/PNGs/200km.PNG'
import Walk250 from '../images/PNGs/250km.PNG'
import Walk300 from '../images/PNGs/300km.PNG'
import Walk350 from '../images/PNGs/350km.PNG'
import Walk375 from '../images/PNGs/375km.PNG'
import Walk400 from '../images/PNGs/400km.PNG'
import Walk450 from '../images/PNGs/450km.PNG'
import Walk500 from '../images/ChangedPNGs/500km.PNG';
import Walk600 from '../images/PNGs/600km.PNG'
import Walk700 from '../images/PNGs/700km.PNG'
import Walk800 from '../images/PNGs/800km.PNG'
import Walk900 from '../images/PNGs/900km.PNG'
import Walk1000 from '../images/PNGs/1000km.PNG';


import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';


//reterns images for the reward tokens that the user has. 
const  RewardNFT =  () => {
   const [balance, setBalance] = useState(0);
    

    let accountActive = true;
    async function populateRewardTokens(){
        try{
        
        const accounts = await web3.eth.getAccounts();
        const balance = await token.methods.balanceOf(accounts[0]).call();
        setBalance(balance);
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk600} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk700} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk800} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk900} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk1000} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 90000){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk600} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk700} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk800} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk900} height='150' alt="walk 1000" />
                    </div>
                </div>
            )

        }else if(balance >= 80000){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk600} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk700} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk800} height='150' alt="walk 1000" />
                    </div>
                            
                    </div>
                )
        }else if(balance >= 70000){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk600} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk700} height='150' alt="walk 1000" />
                    </div>                                
                    </div>
                    )
    }else if(balance >= 60000){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk600} height='150' alt="walk 1000" />
                    </div>                    
            </div>
        )
    }else if(balance >= 50000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk500} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 45000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk450} height='150' alt="walk 1000" />
                    </div>
            </div>
        )

    }else if(balance >= 40000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk400} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 37500 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk375} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 35000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk350} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 30000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk300} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 25000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk250} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 20000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk200} height='150' alt="walk 1000" />
                    </div>
            </div>
        )
    }else if(balance >= 15000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk150} height='150' alt="walk 1000" />   
                    </div>                    
            </div>
        )
    }else if(balance >= 10000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk100} height='150' alt="walk 1000" />
                       
                    </div>
            </div>
        )
    }else if(balance >= 7500 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk75} height='150' alt="walk 1000" />
                       
                    </div>
               </div>
        )
    }else if(balance >= 5000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
            </div>
        )
    }else if(balance >= 50000 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <img  src={Walk50} height='150' alt="walk 500" />
                        
                    </div>
            </div>
        )
    }else if(balance >= 2500 ){
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
                        <img  src={Walk25} height='150' alt="walk 100" />
                        
                    </div>
            </div>
        )
    }else if(balance >= 1000 ){
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