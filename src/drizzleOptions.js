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
  contracts: [PoolRecorder],
  events: {
  },
  polls: {
    //check the blockchain every 5s
    accounts: 1000,
    blocks: 1000
  }
}

export default options
