//converts error messages into readable strings depending on the message
export const errorHandle = (msg) => {
    if (msg === "MetaMask Tx Signature: User denied transaction signature."){
        return "User Denied Transaction on Wallet"
    }else if (msg === 'invalid BigNumber string (argument="value", value="NaN", code=INVALID_ARGUMENT, version=bignumber/5.6.2)'){
        return "Invalid input amount: only use digits from 0 to 9 in your input"
    }else if (msg.substring(0,124) === 'underflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-underflow ] (fault="underflow", operation="BigNumber.from"'){
        return "Input is too long. Only input 2 decimal places or less (ex: 5.55)"
    }else if (msg.substring(0,45) === 'invalid address (argument="address", value=""'){
        return "Missing information. Make sure to fill out all fields including Amount of WMB and Address field depending on which transaction option chosen"
    }else if (msg.substring(0,35) === 'invalid address (argument="address"'){
        return "Invalid address. Please put in a valid one"
    }
    return msg
}