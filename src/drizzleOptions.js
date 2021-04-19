import PoolRecorder from './contracts/PoolRecorder.json';
// import PoolFactory from '../../build/contracts/PoolFactory.json';

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [],
  events: {
  },
  polls: {
    //check the blockchain every 5s
    accounts: 5000,
    blocks: 5000
  }
}

export default options
