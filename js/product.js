const parameters = new URLSearchParams(window.location.search);
const productId = parameters.get("productId");
let image = document.querySelector('img');
let title = document.getElementById('title');
let rate = document.getElementById('rate');
const starInner = document.getElementById('star-inner');
let price = document.getElementById('price');
let description = document.getElementById('discription');
// let categoryLinks = document.querySelectorAll('a');

// categoryLinks .forEach((el) => {
//     el.addEventListener("click",() => {
//         window.location.href = `category.html?category=${el.outerText}`
//         console.log(el.outerText);
//     });
// })


// document.addEventListener('DOMContentLoaded',fetchProduct)



async function fetchProduct(){
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);    
    const data = await res.json()
    // console.log(data);
    image.src = data.image;
    title.innerHTML = data.title;
    rate.innerHTML = data.rating.rate
    starInner.style.width = (data.rating.rate/5)*100 + "%";
    price.innerHTML = `$${data.price}`;
    description.innerHTML = data.description;
    
    
    
}


fetchProduct()







