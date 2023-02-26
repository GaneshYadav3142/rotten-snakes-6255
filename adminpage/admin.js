
    // 1. catch the form
    

    let productDB=JSON.parse(localStorage.getItem("AllProduct"))||[]
    let form = document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let formData = {
            SpecColor: form.SpecColor.value,
            SpecSize: form.SpecSize.value,
            ProductCategory: form.ProductCategory.value,
            FrameShape: form.FrameShape.value,
            ProductRating: form.ProductRating.value,
            ProductTitle: form.ProductTitle.value,
            qty:1,
            id: form.id.value,
            ProductPrice: form.ProductPrice.value,
            BackgroundImage: form.BackgroundImage.value,
            FrontImage: form.FrontImage.value,
            imageModel1: form.imageModel1.value,
            imageModel2: form.imageModel2.value
        }
        //5. we push this obj into our array
        productDB.push(formData);
        // 6. we store the data in local storage.
        // we are trying to store array and object so we need to use stringify
        localStorage.setItem('AllProduct',JSON.stringify(productDB));

        alert('product added to DB!');
        window.location.href="../Product_Page/AllInput/ProductPage.html"
    })
