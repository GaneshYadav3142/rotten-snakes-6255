// making dropdowns of the headers

//---------------> this is second third nav div h4 tags---->
// this is drop1 :
let dropdown1 = document.getElementById("drop1");
let head1 = document.getElementById("headone");
head1.addEventListener("mouseover", ()=> {
    dropdown1.style.display = "block";
})
head1.addEventListener("mouseout", ()=> {
    dropdown1.style.display = "none";
})
dropdown1.addEventListener("mouseover", ()=>{
    dropdown1.style.display = "block";
})
dropdown1.addEventListener("mouseout", ()=>{
    dropdown1.style.display = "none";
})
// this is drop2 :
let dropdown2 = document.getElementById("drop2");
let head2 = document.getElementById("headtwo");
let dro21 = document.getElementById("dr1");
let dro22 = document.getElementById("dr2");
let dro23 = document.getElementById("dr3");
let dro24 = document.getElementById("dr4");
let dro3 = document.getElementById("droper3");
head2.addEventListener("mouseover", ()=> {
    dropdown2.style.display = "block";
    dro21.style.color = "white";
    dro22.style.color = "white";
    dro23.style.color = "white";
    dro24.style.color = "white";
})
head2.addEventListener("mouseout", ()=> {
    dropdown2.style.display = "none";
})
dropdown2.addEventListener("mouseover", ()=>{
    dropdown2.style.display = "block";
})
dropdown2.addEventListener("mouseout", ()=>{
    dropdown2.style.display = "none";
})


/// this is drop3 :
let head3 = document.getElementById("headthree");
let head4 = document.getElementById("headfour");
let head5 = document.getElementById("headfive");
let head6 = document.getElementById("headsix");
let head7 = document.getElementById("headseven");
let head8 = document.getElementById("headeight");

// this is arrivals----->
let khatams1 = document.getElementById("khatam1");
let khatams2 = document.getElementById("khatam2");
let kidspart = document.getElementById("kids");
kidspart.addEventListener("mouseover", ()=>{
    khatams1.style.display = "none";
})
kidspart.addEventListener("mouseout", ()=>{
    khatams1.style.display = "block";
})
kidspart.addEventListener("mouseover", ()=>{
    khatams2.style.display = "none";
})
kidspart.addEventListener("mouseout", ()=>{
    khatams2.style.display = "block";
})

let newArrival = document.getElementById("arrivals");
newArrival.addEventListener("mouseover", ()=>{
    newArrival.textContent = "New Arrivals >";
    newArrival.style.color = "#010045";
    newArrival.style.fontWeight = "600";
})
newArrival.addEventListener("mouseout", ()=>{
    newArrival.textContent = "New Arrivals";
    newArrival.style.color = "#837fa0";
    newArrival.style.fontWeight = "100";
})
