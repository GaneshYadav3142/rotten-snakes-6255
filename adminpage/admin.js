
    // 1. catch the form
    let form = document.querySelector('form');

    // 2. we get the old data
    // as we are using array to store the objects, we use json.parse

    let productDB = JSON.parse(localStorage.getItem('productDB'))||[];

    // 3. we add event to the form to store the data.

    form.addEventListener('submit',function(event){
        // we prevent default
        event.preventDefault();
        //4. we create temp obj to store form data
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
