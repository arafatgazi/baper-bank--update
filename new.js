function getinput(inputid){
    const inputfield=document.getElementById(inputid);
    const inputfieldtext=inputfield.value;
    const inputtotal=parseFloat(inputfieldtext);
    inputfield.value='';
   return inputtotal;
}
function updatetotal(inputid,amount){
    const deposittotal=document.getElementById(inputid);
    const deposittext=deposittotal.innerText;
    const previousamount=parseFloat(deposittext);
    const total=previousamount + amount;
    deposittotal.innerText=total;
}
function updatebalance( isadding,amount){
   const updatebalanceid= document.getElementById('balance-court');
   const balanceintext=updatebalanceid.innerText;
   const previousvalance=parseFloat(balanceintext);
   let total;
//    total ke call krar karone pore ar total er age kichu jmn const ,var use kra lagbena nah total er age. ar total er pashe let use krar karon ta changeable .
   if(isadding==true){
     total=previousvalance + amount;
    
    // program ta sadanato second bracket er bothore kaj krar karone jar karone upore jete pare nah tai update er jnno alada code use krte hbe.jar mdde total joma hoi .tai let total; 

  
 
   }
  else if (isadding == false){
 total=previousvalance - amount;
  }
  updatebalanceid.innerText=total;

}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getinput('deposit-amount');
    
    // upore var amount ta niche  parameter hor upoore jabe kaj krbe 
    updatetotal('deposit-total',amount);
    updatebalance(true,amount);
});
document.getElementById('withdraw-button').addEventListener('click',function(){
const amount =getinput('withdraw-amount');
updatetotal('withdraw-total',amount);
updatebalance(false,amount)
})