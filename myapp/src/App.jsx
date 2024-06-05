import './App.css'
import Navigation from './components/Navigation/Navigation'
import  Wallet  from "./components/wallet/Wallet"
import DisplayPanel from './components/DisplayPanel/DisplayPanel'

function App() {


  return (
    <>
     <Wallet>
      <Navigation/>
      <DisplayPanel/>
     </Wallet>
    </>
  )
}

export default App
