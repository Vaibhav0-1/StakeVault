import './App.css'
import Navigation from './components/Navigation/Navigation'
import  Wallet  from "./components/wallet/Wallet"
import DisplayPanel from './components/DisplayPanel/DisplayPanel'
import TokenApproval from './components/StakeToken/TokenApproval'
import StakeAmount from './components/StakeToken/StakeAmount'

function App() {


  return (
    <>
     <Wallet>
      <Navigation/>
      <DisplayPanel/>
      <TokenApproval/>
      <StakeAmount/>
     </Wallet>
    </>
  )
}

export default App
