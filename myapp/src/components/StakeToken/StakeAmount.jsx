import { useState, useContext, useRef } from "react";
import Button from "../Button/Button"
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";
import StakingContext from "../../context/StakingContext";
const StakeAmount = () => {
  const { stakingContract } = useContext(Web3Context);
  const {isReload, setIsReload} = useContext(StakingContext);
  const stakeAmountRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
  const stakeToken = async (e) => {
    e.preventDefault();
    const amount = stakeAmountRef.current.value.trim();
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter a valid positive number");
      return;
    }

    const amountToStake = ethers.parseUnits(amount, 18).toString();
    try {
      const transaction = await stakingContract.stake(amountToStake);
      setTransactionStatus("Transaction is in Pending State...")
      setIsReload(!isReload);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionStatus("Transaction is Successful");
        setIsReload(!isReload);
        setTimeout(() => {
          setTransactionStatus("")
        }, 5000)
        stakeAmountRef.current.value = ""
      } else {
        setTransactionStatus("Transaction failed")
      }

    } catch (error) {
      console.log("Staking Failed", error.message);
    }
  }
  return (
    <div>
      {transactionStatus}
      <form onSubmit={stakeToken}>
        <label>Stake Amount: </label>
        <input type="text" ref={stakeAmountRef}></input>
        <Button onClick={stakeToken} type="Submit" label="Stake Amount" />
      </form>
    </div>
  )
}

export default StakeAmount
