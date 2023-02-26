let paymentPage=document.querySelector("button")
    paymentPage.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.href = "../chekoutPAY/checkoutPAY.html";
    })

  // let data=[ {
  //       id: 1,
  //       title: "Lenskart Air Online",
  //       size: "Narrow•Air Signia",
  //       price: 999,
  //       discount: "60% OFF. Use: TRYUS",
  //       rating: 4.5,
  //       reviews: 45,
  //       category: "Lenskart Air",
  //       FrameColor: "Black",
  //       WearableFor: "Men",
  //       image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846309_02_2022.jpg",
  //       image2:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846209_02_2022.jpg",
  //     }]

  //   let cartdata=[{
  //       id: 1,
  //       title: "Lenskart Air Online",
  //       size: "Narrow Air Signia",
  //       price: 999,
  //       discount: "60% OFF. Use: TRYUS",
  //       quantity:2,
  //       rating: 4.5,
  //       reviews: 45,
  //       category: "Lenskart Air",
  //       FrameColor: "Black",
  //       WearableFor: "Men",
  //       image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846309_02_2022.jpg",
  //       image2:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846209_02_2022.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Lenskart Air Online",
  //       size: "Narrow Air Signia",
  //       price: 999,
  //       discount: "60% OFF. Use: TRYUS",
  //       quantity:2,
  //       rating: 4.5,
  //       reviews: 45,
  //       category: "Lenskart Air",
  //       FrameColor: "Black",
  //       WearableFor: "Men",
  //       image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846309_02_2022.jpg",
  //       image2:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846209_02_2022.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "Lenskart Air Online",
  //       size: "Narrow Air Signia",
  //       price: 999,
  //       discount: "60% OFF. Use: TRYUS",
  //       quantity:2,
  //       rating: 4.5,
  //       reviews: 45,
  //       category: "Lenskart Air",
  //       FrameColor: "Black",
  //       WearableFor: "Men",
  //       image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846309_02_2022.jpg",
  //       image2:"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/Matte-Black-Gold-Full-Rim-Cat-Eye--Lenskart-Air-Signia-LA-E12054-C5-Eyeglasses_lenskart-air-la-e12054-c5-eyeglasses_G_846209_02_2022.jpg",
  //     }]
      let cartpro=JSON.parse(localStorage.getItem("cartproduct"))||[]
      let second=document.getElementById("second");
     
      function display(data){
        second.innerHTML=null;
        let sum=0;
        data.forEach((el)=>{
          sum+=el.qty*el.ProductPrice
      })
        data.forEach((el,i)=>{
          let card=document.createElement("div");
          let image=document.createElement("img");
          image.src=el.FrontImage;
          let titleEL = document.createElement("p");
          titleEL.textContent = "Brand:"+ el.ProductTitle;
          let colorEL = document.createElement("p");
          colorEL.textContent = "FrameColor:"+ el.SpecColor;
          let price=document.createElement("p");
          let quantity=document.createElement("p");

          price.textContent="productprice:"+el.ProductPrice;
          quantity.textContent="Qty:"+el.qty;
          card.append(image,titleEL,colorEL,quantity,price)
          second.append(card);

        })
        //let subtotal=document.("subtotal")
      }
      display(cartpro)






      second.addEventListener("input")

