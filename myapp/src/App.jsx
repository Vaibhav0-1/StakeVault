import './App.css'
import Navigation from './components/Navigation/Navigation'
import  Wallet  from "./components/wallet/Wallet"
import DisplayPanel from './components/DisplayPanel/DisplayPanel'
import TokenApproval from './components/StakeToken/TokenApproval'
import StakeAmount from './components/StakeToken/StakeAmount'
import WithdrawStakeMount from './components/Withdraw/Withdraw';
import ClaimReward from './components/ClaimReward/ClaimReward'
import { StakingProvider } from './context/StakingContext'

function App() {


  return (
    <>
     <Wallet>
      <Navigation/>
      <StakingProvider>
      <DisplayPanel/>
      <TokenApproval/>
      <StakeAmount/>
      <WithdrawStakeMount/>
      </StakingProvider>
     </Wallet>
     <ClaimReward/>
     
    </>
  )
}

export default App
