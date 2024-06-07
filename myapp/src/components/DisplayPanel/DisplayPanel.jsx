
import StakedAmount from './StakedAmount'
import RewardRate from './RewardRate'
import EarnedReward from './EarnedReward'

const DisplayPanel = () => {
  return (
    <div className="top-wrapper">
    <StakedAmount/>
    <RewardRate/>
    <EarnedReward/>
  </div>
  )
}

export default DisplayPanel
