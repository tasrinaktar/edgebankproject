 document.getElementById('btn-submit').addEventListener('click',()=>{
      const emailid = document.getElementById('email-id');
        const emailtext = emailid.value ;
        const passwordid = document.getElementById('password-id');
        const passwotxt = passwordid.value ;
        if(emailtext === 'towfiqabdullah2gmail.com' &&passwotxt === 'secret')
        {
              window.location.href = 'bank.html';
        }
        else{
           alert('invlaid users');
        }
 })