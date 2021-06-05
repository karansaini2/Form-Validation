let suceess =document.getElementById('suceess');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
let form = document.getElementById('form');
const btn = document.getElementById('btn');
let error1 = document.getElementById('error1');
let error2 = document.getElementById('error2');
let error3 = document.getElementById('error3');
let validEmail = false;
let validPassword = false;
let validPhone = false;

email.addEventListener('blur', () =>{
    let regex = /^([0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
   let str = email.value;
   if (regex.test(str)) {
     error1.innerHTML="";
     validEmail =true;
       
   }
   else{
    error1.innerHTML = "please enter  a valid email";
     validEmail = false;
   }
})

password.addEventListener('blur', () =>{
    let regex = /^([_\-\.@#\*\^0-9a-zA-Z]+)$/;
   let str = password.value;
   if (regex.test(str)) {
     error2.innerHTML="";
     validPassword = true;
   }
   else{
    error2.innerHTML = "enter valid password";
    validPassword = false;
   }
})


phone.addEventListener('blur', () =>{
    let regex = /^([9,8,7])([0-9]{9})$/;
   let str = phone.value;
   if (regex.test(str)) {
     error3.innerHTML="";
     validPhone = true;
   }
   else{
    error3.innerHTML = "enter valid phone";
    validPhone = false;
   }
})

btn.addEventListener('click', (e) =>{
    e.preventDefault();
      if(validEmail && validPassword && validPhone){ 
        suceess.innerHTML = "Successfully Submitted"
        
  
   

}
       else{
            
            suceess.innerHTML = "Some Error Please Check"
}
 

})