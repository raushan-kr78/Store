const parameters = new URLSearchParams(window.location.search);
let categoryName = parameters.get("category");
const cards = document.querySelector('.cards')
let products;


const fetchProduct = async() =>{    
    let res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
    let data = await res.json();
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
            window.location.href = `product.html?productId=${el.dataset.id}`;
            
        })
        
    })
    
}


fetchProduct();
