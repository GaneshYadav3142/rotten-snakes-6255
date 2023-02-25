let paymentPage=document.querySelector("#btn")
    paymentPage.addEventListener("click",(event)=>{
        event.preventDefault()
        window.location.href="..chekoutPAY/checkoutPAY.html"
    })

    // C:\Users\DELL\Desktop\LensKart\rotten-snakes-6255\chekoutPAY\checkoutPAY.html
    let cart = document.getElementById("second");
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

