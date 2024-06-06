import { useState, useContext, useRef } from "react";
import Button from "../Button/Button"
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";
const WithdrawStakeAmount = () => {
  const {stakingContract}= useContext(Web3Context);
  const withdrawStakeAmountRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
  const withdrawStakeToken = async(e)=>{
    e.preventDefault();
    const amount = withdrawStakeAmountRef.current.value.trim();
    if(isNaN(amount) || amount<=0){
        console.error("Please enter a valid positive number");
        return;
    }
  
    const amountToWithdraw = ethers.parseUnits(amount,18).toString();
    try{
      const transaction = await stakingContract.withdrawStakedTokens(amountToWithdraw );
      setTransactionStatus("Transaction is in Pending State...")
      
      const receipt = await transaction.wait();
      if (receipt.status===1){
          setTransactionStatus("Transaction is Successful");
          setTimeout(()=>{
              setTransactionStatus("")
          },5000)
          withdrawStakeAmountRef.current.value=""
      }else{
          setTransactionStatus("Transaction failed")
      }

    }catch(error){
      console.log("Staking Failed",error.message);
    }
  }
  return (
    <div>
      {transactionStatus }
      <form onSubmit={withdrawStakeToken}>
        <label>Amount to Withdraw: </label>
        <input type = "text" ref={withdrawStakeAmountRef}></input>
        <Button onClick={withdrawStakeToken} type="Submit" label=" Withdraw Stake Token"/>
      </form>
    </div>
  )
}

export default StakeAmount
