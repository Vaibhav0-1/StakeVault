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
        chainId = parseInt(chainIdHex,16)

        let selectedAccount = accounts[0];
        if(!selectedAccount){
            throw new Error("No ethereum account available")
        }


        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        const stakingContractAddress ="0x2D56Fa2c3d390285bB8A4566CE1DF8e727B03C30"
        const StakeTokenFContractAddress ="0x7d72d4b085874de267a1c8080eab067e031e001d"

        stakingContract = new Contract(stakingContractAddress, stakingAbi,signer);

        stakeTokenContract = new Contract(StakeTokenFContractAddress,stakeTokenAbi,signer); 

        return{ provider,selectedAccount,stakeTokenContract,stakingContract,chainId }

    }catch(error){
        console.error(error);
        throw error;
    }
}