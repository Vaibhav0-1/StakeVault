import { useState, useEffect } from "react";
//import { set } from "react-hook-form";
import { connectWallet } from "../../utils/connectWallet";

const Wallet = ()=>{
    const [state,setState] = useState({
        provider:null,
        account:null,
        stakingContract:null,
        stakeTokenContract:null,
        chainId:null
    })
    const [isLoading,setIsLoading] = useState(false);

    const handleWallet = async()=>{
        try{
            setIsLoading(true);
            const { provider,selectedAccount,stakingContract,stakeTokenContract, chainId } = await connectWallet();
            console.log("Provider:",provider,"selectedAccount:",selectedAccount,"StakingContract:",stakingContract,"stakeTokenContract:",stakeTokenContract,"chainId:",chainId);
            setState({provider,selectedAccount,stakingContract,stakeTokenContract, chainId});

        }catch(error){
            console.log("Error connecting Wallet:",error.message)
        }finally{
            setIsLoading(false)
        }
    }
    return <button onClick={handleWallet}>Connect Wallet</button>
}
export default Wallet;