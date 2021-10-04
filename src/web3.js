import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider); 
const contract = new web3.eth.Contract(FARMING_ABI, p.farmAddr);
contract.methods.userInfo(p.pid, connectedAddr).call(
).then((res) => {
  let lp = Number(res.amount) / Math.pow(10, 18);
  let earned = Number(res.rewardDebt) / Math.pow(10, 18);
  setLpStakedCurrPool(lp)
  setOpusEarned(earned);
  if (lp > 0) {
    farmContract.methods.pendingOpus(p.pid, connectedAddr).call(
    ).then((pendingRes) => {
      let pending = Number(pendingRes) / Math.pow(10, 18);
      setPendingOpus(pending)
    })
  }
})
const lpContract = new web3.eth.Contract(ERC20_ABI, p.lpAddr);
lpContract.methods.balanceOf(connectedAddr).call(
).then((lpBal) => {
  setLpBalCurrPool(Number(lpBal) / Math.pow(10, 18));
})
export default web3;
