import './App.css'
import Navigation from './components/Navigation/Navigation'
import  Wallet  from "./components/wallet/Wallet"
import DisplayPanel from './components/DisplayPanel/DisplayPanel'
import TokenApproval from './components/StakeToken/TokenApproval'

function App() {


  return (
    <>
     <Wallet>
      <Navigation/>
      <DisplayPanel/>
      <TokenApproval/>
     </Wallet>
    </>
  )
}

export default App
