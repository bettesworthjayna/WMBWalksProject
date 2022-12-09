import { useEffect, useState } from 'react';
import token from '../EtherConnect/token';

const Leaderboard =  () => {
        const [first, setFirst] = useState({});
        const [second, setSecond] = useState({});
        const [third, setThird] = useState({});
        const [fourth, setFourth] = useState({});
        const [fifth, setFifth] = useState({});
        const [numUsers, setNumUsers] = useState(0);
        const [six, setSix] = useState({});
        const [seven, setSeven] = useState({});
        const [eight, setEight] = useState({});
        const [nine, setNine] = useState({});
        const [ten, setTen] = useState({});
    useEffect( () => {
        async function fetchData () {
            setFirst(await token.methods.leaders(0).call());
            setSecond(await token.methods.leaders(1).call());
            setThird(await token.methods.leaders(2).call());
            setFourth( await token.methods.leaders(3).call());
            setFifth(await token.methods.leaders(4).call());
            setNumUsers(await token.methods.numberOfUsers().call());

            if (numUsers != null && numUsers > 10){
                setSix(await token.methods.leaders(5).call());
                setSeven(await token.methods.leaders(6).call());
                setEight(await token.methods.leaders(7).call());
                setNine( await token.methods.leaders(8).call());
                setTen(await token.methods.leaders(9).call());
            }
        }
        fetchData();
    });

   
    if(first.accountAddress != null && ten.accountAddress != null && numUsers > 10){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp;{first.distance /100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #2 &emsp;{second.distance /100}km - {second.accountName || (second.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #3 &emsp;{third.distance /100}km - {third.accountName || (third.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #4 &emsp;{fourth.distance /100}km - {fourth.accountName || (fourth.accountAddress.substring(0, 10) + '...')}</h3>
                <h3>&emsp; #5 &emsp;{fifth.distance /100}km - {fifth.accountName || (fifth.accountAddress.substring(0, 10) + '...')}  </h3>
                <h3>&emsp; #6 &emsp;{six.distance /100}km - {six.accountName || (six.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #7 &emsp;{seven.distance /100}km - {seven.accountName || (seven.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #8 &emsp;{eight.distance /100}km - {eight.accountName || (eight.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #9 &emsp;{nine.distance /100}km - {nine.accountName || (nine.accountAddress.substring(0, 10) + '...')}</h3>
                <h3>&emsp; #10 &emsp;{ten.distance /100}km - {ten.accountName || (ten.accountAddress.substring(0, 10) + '...')}  </h3>
                </div>
            </div> )
    }else 
    if(first.distance == 0){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '500px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <p>No one yet. Go on a run walk or hike to mine tokens and appear on the leaderboard</p>
            </div>
        )
    }else if (second.distance == 0){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp; {first.distance / 100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')} </h3>
                </div>
            </div>
        )
    }else if (third.distance == 0){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp; {first.distance / 100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #2 &emsp; {second.distance / 100}km - {second.accountName || (second.accountAddress.substring(0, 10) + '...')} </h3>
                </div>
            </div>
        )
    }else if (fourth.distance == 0){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp; {first.distance /100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')}  </h3>
                <h3>&emsp; #2 &emsp;{second.distance /100}km - {second.accountName || (second.accountAddress.substring(0, 10) + '...')}  </h3>
                <h3>&emsp; #3 &emsp;{third.distance /100}km - {third.accountName || (third.accountAddress.substring(0, 10) + '...')} </h3>
                </div>
            </div>
        )
    }else if (fifth.distance == 0){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp;{first.distance /100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #2 &emsp;{second.distance /100}km - {second.accountName || (second.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #3 &emsp;{third.distance /100}km - {third.accountName || (third.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #4 &emsp;{fourth.distance /100}km - {fourth.accountName || (fourth.accountAddress.substring(0, 10) + '...')}</h3>
                </div>
            </div>
        )
    }else if(first.accountAddress != null && second.accountAddress != null && third.accountAddress != null && fourth.accountAddress != null && fifth.accountAddress != null){
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '400px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <div style={{textAlign: 'left'}}>
                <h3>&emsp; #1 &emsp;{first.distance /100}km - {first.accountName || (first.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #2 &emsp;{second.distance /100}km - {second.accountName || (second.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #3 &emsp;{third.distance /100}km - {third.accountName || (third.accountAddress.substring(0, 10) + '...')} </h3>
                <h3>&emsp; #4 &emsp;{fourth.distance /100}km - {fourth.accountName || (fourth.accountAddress.substring(0, 10) + '...')}</h3>
                <h3>&emsp; #5 &emsp;{fifth.distance /100}km - {fifth.accountName || (fifth.accountAddress.substring(0, 10) + '...')}  </h3>
                </div>
            </div>
        )
    }else{
        return (
            <div style={{backgroundColor: '#fff59d', paddingBottom: '10px', maxWidth: '500px', margin: '0 auto', border: 'solid 5px #ffeb3b'}}>
                <h2>Leaderboard:</h2>
                <p>Connect your wallet to see the leaderboard</p>
            </div>
        )
    }

}

export default Leaderboard;