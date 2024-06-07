import { useContext, useState} from "react";
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";
import StakingContext from "../../context/StakingContext";
const ClaimReward = ()=>{
 const { stakingContract }=useContext(Web3Context);
 const [transactionStatus, setTransactionStatus] = useState("");
 const claimReward = async()=>{
  try{
    const transaction = await stakingContract.getReward();
    const receipt = await transaction.wait();
    setTransactionStatus("Transaction is in Pending State...")
    if(receipt.status === 1){
        setTransactionStatus("Transaction Is Successful")
        setTimeout(()=>{
          setTransactionStatus("")
        },5000) 
      } else{
        setTransactionStatus("Transaction failed. Please try again.");
      }
  }catch(error){
    console.error("Claim Reward Failed",error.message)
  }
 }
 return (
    <>
   {transactionStatus && <div>{transactionStatus}</div>}
     <Button type="button" label="Claim Reward" onClick={claimReward}/>
    </>
 )
}

export default ClaimReward;