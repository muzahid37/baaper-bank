document.getElementById('deposit-button').addEventListener('click', function(){
    const dipossipInput= document.getElementById('deposit-input');
    const newDepositAmountText= dipossipInput.value;
    const newDepositAmount= parseFloat(newDepositAmountText);
    // const newDepositAmount=getInputValue('deposit-input');

    const dipositTotal= document.getElementById('deposit-total');
    const previousDepositText= dipositTotal.innerText;
    const previousDeposit= parseFloat(previousDepositText);
    const newDipositTotal=previousDeposit+newDepositAmount;
    dipositTotal.innerText= newDipositTotal;
     
  

    const balanceTotal=document.getElementById('balance-total');
    const previusBalanceTotalText= balanceTotal.innerText;
    const previusBalanceTotal=parseFloat(previusBalanceTotalText);
    const newBalanceTotal=previusBalanceTotal+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;
    dipossipInput.value = '';
  
})    

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput= document.getElementById('withdraw-input');
    const withdrawInputAmauntText= withdrawInput.value;
    const withdrawInputAmaunt= parseFloat(withdrawInputAmauntText);


    // withdrow amaunt fild

    const withdrowTotal= document.getElementById('withdraw-total');
    const previousWithdrowTotalText=withdrowTotal.innerText;
    const previousWithdrowTotal= parseFloat(previousWithdrowTotalText);
     const newWithdrowAmaint=previousWithdrowTotal+withdrawInputAmaunt;

     withdrowTotal.innerText=newWithdrowAmaint;

    

     const balanceTotal=document.getElementById('balance-total');
    const previusBalanceTotalText= balanceTotal.innerText;
    const previusBalanceTotal=parseFloat(previusBalanceTotalText);
    const newBalanceTotal=previusBalanceTotal+(-withdrawInputAmaunt);
    balanceTotal.innerText=newBalanceTotal;
      

})


    
    
    


