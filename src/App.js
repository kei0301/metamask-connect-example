import { useMetaMask } from "metamask-react";
import logo from './logo.svg';
import './App.css';

function App() {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  if (status === "unavailable") return <div>MetaMask not available :(</div>

  if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  if (status === "connecting") return <div>Connecting...</div>

  if (status === "connected") {
    if (chainId === '0x1') {
      return <div>Connected account: {account}</div>
    } else {
      alert('network is not ethereum.<br />Reconnect the net');
      return <button onClick={connect}>Connect to MetaMask</button>
    }
    console.log(account, ethereum, chainId, status, 8989)
  }

  return null;
}

export default App;
