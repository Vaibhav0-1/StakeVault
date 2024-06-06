import { useState, useContext, useRef } from "react";
import Button from "../Button/Button"
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";

const TokenApproval = () => {
    const {stakeTokenContract,stakingContract}= useContext(Web3Context);
    const approvedTokenRef = useRef();
    const [transactionStatus, setTransactionStatus] = useState("");
    const approveToken = async(e)=>{
        e.preventDefault();
        const amount = approvedTokenRef.current.value.trim();
        if(isNaN(amount) || amount<=0){
            console.error("Please enter a valid positive number");
            return;
        }
        const amountToSend = ethers.parseUnits(amount,18).toString();
        try{
            const transaction = await stakeTokenContract.approve(stakingContract.target,amountToSend);
            setTransactionStatus("Transaction is in Pending State...")
            
            const receipt = await transaction.wait();
            if (receipt.status===1){
                setTransactionStatus("Transaction is Successful");
                setTimeout(()=>{
                    setTransactionStatus("")
                },5000)
                approvedTokenRef.current.value=""
            }else{
                setTransactionStatus("Transaction failed")
            }
        }catch(error){
            console.loga("Token Approval Failed",error.message);
        }
    }
  return (
    <div>
        {transactionStatus }
      <form onSubmit={approveToken}>
        <label>Token Approval: </label>
        <input type = "text" ref={approvedTokenRef}></input>
        <Button onClick={approveToken} type="Submit" label="Token Approve"/>
      </form>
    </div>
  )
}

export default TokenApproval
