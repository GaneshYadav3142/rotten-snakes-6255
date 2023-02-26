
    // 1. catch the form
    let productDB=JSON.parse(localStorage.getItem("AllProduct"))||[]
    let form = document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let formData = {
            speccolor: form.speccolor.value,
            specsize: form.specsize.value,
            productcategory: form.ProductCategory.value,
            frameshape: form.frameshape.value,
            productrating: form.productrating.value,
            producttitle: form.producttitle.value,

            id: form.id.value,
          
            productprice: form.productprice.value,
        imagebg: form.imagebg.value,
        imagefg: form.imagefg.value,
        imagemodel1: form.imagemodel1.value,
        imagemodel2: form.imagemodel2.value,

        }
       
        productDB.push(formData);
        
        localStorage.setItem('AllProduct',JSON.stringify(productDB));

        alert('product added to DB!');
    })
