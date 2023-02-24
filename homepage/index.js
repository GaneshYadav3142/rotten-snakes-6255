// making dropdowns of the headers
//---------------> this is second third nav div h4 tags---->
let head1 = document.getElementById("headone");
let head2 = document.getElementById("headtwo");
let head3 = document.getElementById("headthree");
let head4 = document.getElementById("headfour");
let head5 = document.getElementById("headfive");
let head6 = document.getElementById("headsix");
let head7 = document.getElementById("headseven");
let head8 = document.getElementById("headeight");

head1.addEventListener("mouseover",()=> {
    
})
head1.addEventListener("mouseout",()=> {
    head1.style.color = "#000042";
})
let user2=sessionStorage.getItem("user2")||"Sign In & Sign Up"
let user1=document.getElementById("user1")
//let username=localStorage.getItem("user");
console.log(user2)
user1.addEventListener("click",()=>{
    window.location.assign("/rotten-snakes-6255/loginpage/login.html")
})

user1.textContent=user2





