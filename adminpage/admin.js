
    // 1. catch the form
    let form = document.querySelector('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        let formData = {
            name: form.name.value,
            desc: form.desc.value,
            price: form.price.value,
            url: form.url.value
        }
        //5. we push this obj into our array
        productDB.push(formData);
        // 6. we store the data in local storage.
        // we are trying to store array and object so we need to use stringify
        localStorage.setItem('productDB',JSON.stringify(productDB));

        alert('product added to DB!');
    })
