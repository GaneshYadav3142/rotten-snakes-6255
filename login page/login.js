let b1=document.querySelector("#logincont span");
let b2=document.querySelector("#registercont span")
let login=document.getElementById("logincont");
let register=document.getElementById("registercont")
register.style.display="none"
b1.addEventListener("click",()=>{
    login.style.display = 'none';
    register.style.display = 'block';
})
b2.addEventListener("click",()=>{
    login.style.display = 'block';
    register.style.display = 'none';
})


let logInForm = document.querySelector('#login')
    let signUpForm = document.querySelector('#signup')

    let userDB = JSON.parse(localStorage.getItem('users'))||[];
    let user=""
   signUpForm.addEventListener('submit',function(event){
     event.preventDefault();
       let formData = {
           name: signUpForm.sName.value,
           email: signUpForm.sEmail.value,
           mobile:signUpForm.sMobile.value,
           password: signUpForm.sPassword.value
       }
       if(signUpForm.sPassword.value!=signUpForm.sPassword1.value){
           alert('Passwords Mismatch!')
       }
       else{
           let count = 0;
           userDB.forEach(function(el){
               if(el.email == formData.email){
                   count++;
               }
           })
           if(count>0){
               alert('User Already Registered!Click on Login')
           }
           else{
               userDB.push(formData);
              user=userDB[userDB.length-1].name
               localStorage.setItem('users',JSON.stringify(userDB));
               alert('Registered successfully!')
               window.location.assign("./productpage.html")
               localStorage.setItem("user",userDB[userDB.length-1].name)
           }
       }
   })
   logInForm.addEventListener('submit',function(event){
       event.preventDefault();
           let count = 0;
           userDB.forEach(function(el){
               if(el.email == logInForm.lEmail.value){
                   count++;
               }
           })
           if(count==0){
               alert('user not found!');
           }
           else{
               userDB.forEach(function(el){
               if(el.email == logInForm.lEmail.value){
                   if(el.password===logInForm.lPassword.value){
                       alert("login successful!");
                      console.log(el.name)
                       window.location.assign('./homepage.html');
                       localStorage.setItem("user",el.name)
                   }
                   else{
                       alert('wrong crendentials!')
                   }
               }
           })
           }  
   })