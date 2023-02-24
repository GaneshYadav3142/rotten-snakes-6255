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
let head3 = document.getElementById("headthree");
let head4 = document.getElementById("headfour");
let head5 = document.getElementById("headfive");
let head6 = document.getElementById("headsix");
let head7 = document.getElementById("headseven");
let head8 = document.getElementById("headeight");