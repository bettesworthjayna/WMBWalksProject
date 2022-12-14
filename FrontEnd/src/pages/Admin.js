import React, { useEffect, useState} from "react";
import token from '../EtherConnect/token';


const Admin = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [string, setString] = useState("");

    useEffect(() => {
        const  getData  = async () =>{
            const numberParticipants = await token.methods.numberOfUsers().call();
            setNumberOfUsers(numberParticipants);
        }
        getData();

        const array = async () => {
            let stringArray = ``;
        
            let i = 0;
            while(i < numberOfUsers){
                //(third.accountAddress.substring(0, 10) + '...')
                let temporary = await token.methods.allUsers(i).call();
                let balance =  (await token.methods.balanceOf(temporary).call())/100;
                let tempSub = temporary.substring(0, 10) + `...`;
                let name = await token.methods.personName(temporary).call();
                stringArray += `[[${name} (${tempSub} ) has  ${balance}  tokens.]] --- \n`
                i++
            }
            setString(stringArray);

        }
        array();
        
    })
    
  
        return(
            
            <div>
                <h2>All Participants: </h2>
                { string }
                 
            </div>

        )
    }


export default Admin;