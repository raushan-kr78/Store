
let cards = document.querySelector('.cards');
// let category = document.querySelectorAll('a');
let products;





const getProduct = async() =>{
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    // console.log(data);
    
    
    data.forEach((e)=> {
        let card = document.createElement('div');
        card.classList.add('card')
        card.dataset.id = e.id
        
        card.innerHTML = `<img src="${e.image}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p> $${e.price}</p>`;
        cards.append(card);
    });

    products = document.querySelectorAll('.card')
    products.forEach(el=>{
        el.addEventListener('click',()=>{
            window.location.href = `product.html?productId=${el.dataset.id}`
            console.log(el.dataset.id);
            
        })
        
    })
};
// category.forEach((el) => {
//     el.addEventListener("click",() => {
//         window.location.href = `category.html?category=${el.outerText}`
//         console.log(el.outerText);
//     });
// })



getProduct()