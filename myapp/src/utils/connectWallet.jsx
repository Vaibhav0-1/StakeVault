import { ethers,Contract } from "ethers";
import stakingAbi from "../ABI/StakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";

export const connectWallet = async()=>{
    try{
        let[signer,provider,account,stakingContract,stakeTokenContract, chainId] = [null,null,null,null,null]

        if(window.ethereum===null){
            throw new Error("Metamask is not installed");
        }
        const accounts = await window.ethereum.request({
            method:'eth_requestAccounts'
        })
        let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        })
        chainId = parseInt(chainIdHex,10)

        let selectedAccount = accounts[0];
        if(!selectedAccount){
            throw new Error("No ethereum account available")
        }


        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        const stakingContractAddress ="0x4e16919197ce018636a950550ff138170d2608a0"
        const StakeTokenFContractAddress ="0x7b1fc071985a05dafd3291419128b7b72fac879a"

        stakingContract = new Contract(stakingContractAddress, stakingAbi,signer);

        stakeTokenContract = new Contract(StakeTokenFContractAddress,stakeTokenAbi,signer); 

        return{ provider,selectedAccount,stakeTokenContract,stakingContract,chainId }

    }catch(error){
        console.error(error);
        throw error;
    }
}