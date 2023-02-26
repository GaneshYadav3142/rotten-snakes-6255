let arr =JSON.parse(localStorage.getItem("cartproduct"))||[];

// catching the tags
let Emptycart = document.getElementById("emptyall");
let cart = document.getElementById("middle_part");
let cart_bill= document.getElementById("cart&bill");

// checking the array if it is empty or not after loading of the page
function onload() {
  if (arr.length == 0) {
    Emptycart.innerHTML = `<div id="empty"><p >Your shopping cart is empty !</p>
        <a href="/rotten-snakes-6255/homepage/index.html"><button>Continue Shopping</button></a><div>`;
  } else {


    // function cartItems(arr) {
    //   cax mrt.innerHTML = "";
    //   // creating 2 divs in the cart page
    //   cart.innerHTML = `<div id="cart_list"></div>
    //         <div id="Bill-details"></div>`;

    //   // calling the cart_list div(from line no 36) and storing it in a variable
    //   let cart_list = document.getElementById("cart_list");

    //   // looping over the array and storing the data into a variable
    //   let allData = arr
    //     .map(function (item) {
    //       //count for the quantity of the item
    //       let count = 1;
    //       let FinalPrice = item.price * count;

    //       // creating a card for each item in the array
    //       let cardData = `<div class="card">
    //             <div>
    //               <img src=${item.image} alt="" />
    //             </div>
    //             <div class="Right">
    //               <div class="lines one">
    //                 <p class="title">${item.title}</p>
    //                 <p class="currPrice">₹${item.price}</p>
    //               </div>
    //               <div class="lines two">
    //                 <p>Final Price</p>
    //                 <p class="finalprice_of_curr_item">₹${FinalPrice}</p>
    //               </div>
    //               <div class="lines three">
    //                 <p >Remove</p>
    //                 <div>
    //                   <p class="decrease">-</p>
    //                   <p class="counter">${count}</p>
    //                   <p class="increase">+</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>`;

    //       return cardData;
    //     })
    //     .join("");

    //   // catching the decrease and increase button

    //   let decrease = document.querySelectorAll(".decrease");
    //   let increase = document.getElementsByClassName("increase");
    //   let counter = document.getElementsByClassName("counter");
    //   let finalprice_of_curr_item = document.getElementsByClassName(
    //     "finalprice_of_curr_item"
    //   );
    //   let currPrice = document.getElementsByClassName("currPrice");

    //   // looping over the decrease and increase button and adding event listener to them
    //   for (let i = 0; i < decrease.length; i++) {
    //     let count = parseInt(counter[i].innerHTML);
    //     let currentPrice = parseInt(currPrice[i].innerHTML);
    //     decrease[i].addEventListener("click", function () {
    //       if (count > 1) {
    //         count--;
    //         counter[i].innerHTML = count;
    //         FinalPrice = currentPrice * count;
    //         finalprice_of_curr_item[i].innerHTML = FinalPrice;
    //       }
    //     });

    //     increase[i].addEventListener("click", function () {
    //       count++;
    //       counter[i].innerHTML = count;
    //       FinalPrice = currentPrice * count;
    //       finalprice_of_curr_item[i].innerHTML = FinalPrice;
    //     });
    //   }


    //   cart_list.innerHTML += `<p id="cartNum">Cart (${arr.length} items)</p>${allData}`;
    // }
   cart_bill.innerHTML = `Cart (${arr.length} items)`;
    let pricesum = 0;

    function cartItems(arr) {
        cart.innerHTML = "";
        let cart_list = document.createElement("div");

        arr.forEach((item,index) => {
            // let count = 1;

            let cards = document.createElement("div");
            cards.classList.add("card");
            let left = document.createElement("div");
            let right = document.createElement("div");
            right.classList.add("Right");

            //image for left div--------------------------------------------------------------
            let img = document.createElement("img");
            img.src = item.FrontImage;
            left.append(img);
            //--------------------------------------------------------------------------------

            //adding elements in right div--------------------------------------------------------------

            //title and price
            let lines1 = document.createElement("div");
            lines1.classList.add("lines","one");
            let title = document.createElement("p");
            title.classList.add("title");
            title.innerHTML = item.ProductTitle;
            let price= document.createElement("p");
            price.innerHTML = "₹"+item.ProductPrice;
            lines1.append(title,price);

            //final price

            let lines2 = document.createElement("div");
            lines2.classList.add("lines","two");
            let finalPrice = document.createElement("p");
            finalPrice.innerHTML = "Final Price";
            let finalPriceValue = document.createElement("p");
            finalPriceValue.innerHTML = "₹"+item.ProductPrice*item.qty;
            pricesum += item.ProductPrice*item.qty;
            lines2.append(finalPrice,finalPriceValue);

            
            //quantity and remove
            let lines3 = document.createElement("div");
            lines3.classList.add("lines","three");
            let remove = document.createElement("p");
            remove.innerHTML = "Remove";
            let quantity = document.createElement("div");
            let decrease = document.createElement("p");
            decrease.id = "decrease";
            decrease.innerHTML = "-";
            let counter = document.createElement("p");
            counter.innerHTML = item.qty;
            let increase = document.createElement("p");
            increase.id = "increase";
            increase.innerHTML = "+";
            quantity.append(decrease,counter,increase);
            lines3.append(remove,quantity);

            //appending all the elements in the right div
            right.append(lines1,lines2,lines3);

            //--------------------------------------------------------------------------------------------


            //appending left and right div in the card-----------------------------------------------------
            cards.append(left,right);
            //--------------------------------------------------------------------------------------------


            // makiing remove button work
            remove.addEventListener("click",function(){
                arr.splice(index,1);
                localStorage.setItem("AllProduct",JSON.stringify(arr));
                onload(arr);
                // localStorage.setItem("AllProduct",JSON.stringify(arr));
                // onload();
            });


            //making the quantity work
            decrease.addEventListener("click",function(){
                // count=item.qty;
                if(item.qty>1){
                    item.qty--;
                    pricesum -= item.ProductPrice;
                    counter.innerHTML = item.qty;
                    finalPriceValue.innerHTML = "₹"+item.ProductPrice*item.qty;
                    localStorage.setItem("AllProduct",JSON.stringify(arr));
                    onload();
                }
            });

            increase.addEventListener("click",function(){
                // count=parseInt(counter.innerHTML);
                item.qty++;
                pricesum += item.ProductPrice;
                counter.innerHTML = item.qty;
                finalPriceValue.innerHTML = "₹"+item.ProductPrice*item.qty;
                localStorage.setItem("AllProduct",JSON.stringify(arr));
                onload();
            });


        cart_list.append(cards);
        })
        
        cart.append(cart_list);
    }
    cartItems(arr);


    // making the bill details-----------------------------------------------------
    let billOuter = document.createElement("div");
    let bill = document.createElement("div");
    bill.classList.add("bill");
    //-----------------------------------------------------------------------------
    //total price
    let line1= document.createElement("div");
    line1.classList.add("line");
    let total = document.createElement("p");
    total.innerHTML = "Total Price";
    let totalValue = document.createElement("p");
    totalValue.innerHTML = "₹"+pricesum;
    line1.append(total,totalValue);


    //tax
    let line2= document.createElement("div");
    line2.classList.add("line");
    let tax = document.createElement("p");
    tax.innerHTML = "Tax";
    let taxValue = document.createElement("p");
    let taxval=pricesum*0.18;
    taxValue.innerHTML = "₹"+taxval.toFixed(2);
    line2.append(tax,taxValue);

    //total payable amount
    let line3= document.createElement("div");
    line3.classList.add("line",);
    let payable = document.createElement("p");
    payable.innerHTML = "Total Payable";
    let payableValue = document.createElement("p");
    let totalpayable=pricesum+taxval;
    payableValue.innerHTML = "₹"+totalpayable.toFixed(2);
    line3.append(payable,payableValue);

    //appending all the elements in the bill div
    bill.append(line1,line2,line3);


    //appending the bill div in the cart div
    billOuter.append(bill);
    cart.append(billOuter);



    //making the checkout button work
    let checkoutpg=document.createElement("a");
    checkoutpg.setAttribute("href","/rotten-snakes-6255/checkoutpage2/checkout.html");
    // console.log(check)
    let checkout = document.createElement("button");
    checkout.innerHTML = "Proceed To Checkout";
    checkout.id = "checkout";
    // checkout.addEventListener("click",function(){
    //     alert("Your order has been placed successfully");
    // });

    checkoutpg.append(checkout);

    billOuter.append(checkoutpg);
    
    // checkout.addEventListener("click",function(){
    //   window.location.assign("/checkoutpage/checkout.html");
    // });
  }
};

// calling the function
onload();