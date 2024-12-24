document.getElementById('btn-deposit').addEventListener('click',()=>{
       const email = document.getElementById('email-id');
       const emailtext = email.value ;
       const newamount = parseFloat(emailtext);

       const depoamountmoney = document.getElementById('depoamount');
        const previousstring = depoamountmoney.innerText;
        const previousamount = parseFloat(previousstring);
        const currenttotal = previousamount+newamount;
        depoamountmoney.innerText=currenttotal;
        email.value = '';

        const updatebalcne = document.getElementById('update-balance');
          const updatestring = updatebalcne.innerText;
          const updatestringblalnce = parseFloat(updatestring);
         const updatedepositeblance =  updatestringblalnce+newamount;
         updatebalcne.innerText= updatedepositeblance;
         
            

           
        

})

 