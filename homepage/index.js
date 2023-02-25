// making dropdowns of the headers
//---------------> this is second third nav div h4 tags---->
// this is drop1
let dropdown1 = document.getElementById("drop1");
let head1 = document.getElementById("headone");

head1.addEventListener("mouseover",()=> {
    dropdown1.style.display = "block";
})
head1.addEventListener("mouseout",()=> {
    dropdown1.style.display = "none";
})
dropdown1.addEventListener("mouseover", ()=>{
    dropdown1.style.display = "block";
})
dropdown1.addEventListener("mouseout", ()=>{
    dropdown1.style.display = "none";
})

// this is drop2
let head2 = document.getElementById("headtwo");
let dro21 = document.getElementById("dr1");
let dro22 = document.getElementById("dr2");
let dro23 = document.getElementById("dr3");
let dro24 = document.getElementById("dr4");
let dro3 = document.getElementById("droper3");
head2.addEventListener("mouseover", ()=> {
    dropdown1.style.display = "block";
    dro21.style.color = "white";
    dro22.style.color = "white";
    dro23.style.color = "white";
    dro24.style.color = "white";
})
head2.addEventListener("mouseout", ()=> {
    dropdown1.style.display = "none";
})
dropdown1.addEventListener("mouseover", ()=>{
    dropdown1.style.display = "block";
})
dropdown1.addEventListener("mouseout", ()=>{
    dropdown1.style.display = "none";
})


/// this is drop3 :
let head3 = document.getElementById("headthree");
let head4 = document.getElementById("headfour");
let head5 = document.getElementById("headfive");
let head6 = document.getElementById("headsix");
let head7 = document.getElementById("headseven");
let head8 = document.getElementById("headeight");


let user2=sessionStorage.getItem("user2")||"Sign In & Sign Up"
let user1=document.getElementById("user1")
//let username=localStorage.getItem("user");
console.log(user2)
user1.addEventListener("click",()=>{
    window.location.assign("/rotten-snakes-6255/loginpage/login.html")
})

user1.textContent=user2





