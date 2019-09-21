import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';


const { scatter } = ScatterJS;

scatter.loadPlugin(new ScatterEOS());


export function scatterWalletProvider() {
  return function makeWalletProvider(network) {
    
    // Connection
    function connect(appName) {
      return scatter.connect(appName, {
        initTimeout: 10000, 
      }).then((connected) => {
        if(connected) return true;
        return Promise.reject('Cannot connect to Scatter')
      });
    }


  }
}