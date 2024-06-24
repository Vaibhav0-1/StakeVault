import React from 'react';
import ClaimReward from '../ClaimReward/ClaimReward';
import ConnectedAccount from './ConnectedAccount';
import ConnectedNetwork from './ConnectedNetwork';
import './Navigation.css'; // Import your CSS file for styling

const Navigation = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Stake Vault</h1>
      <div className="navbar-acc">
        <ConnectedAccount />
        <ConnectedNetwork />
      </div>
      <div className="navbar-btns">
        <ClaimReward />
      </div>
    </header>
  );
}

export default Navigation;
