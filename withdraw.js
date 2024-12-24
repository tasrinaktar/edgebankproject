   document.getElementById('btn-withdraw').addEventListener('click',()=>{
        const previouswithdraw =  document.getElementById('update-withdraw');
         const previouswithdrawstring =  previouswithdraw.innerText;
         const previousamount = parseFloat(previouswithdrawstring);

         const currentamount = document.getElementById('withraw-id');
          const currentamountstring= currentamount.value ;
          const currentamountnumber = parseFloat(currentamountstring) ;
          const currentamounttotal = currentamountnumber+previousamount;
          previouswithdraw.innerText =currentamounttotal;
          currentamount.value = '';

          const updatebalcne = document.getElementById('update-balance');
          const updatestring = updatebalcne.innerText;
          const updatestringblalnce = parseFloat(updatestring);
          console.log(updatestringblalnce);
          console.log(currentamountnumber);
         const updatewithdrawblance = updatestringblalnce-currentamountnumber;
         updatebalcne.innerText = updatewithdrawblance;


   })
   
    
