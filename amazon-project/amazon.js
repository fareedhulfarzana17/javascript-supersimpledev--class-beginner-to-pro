const products=[
  {
    image:"images/products-img/athletic-cotton-socks-6-pairs.jpg",
    name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating:
    {
     star:"images/ratings/rating-4.5.png",
     count:87,

    },
    price:1090,


  },
  {
    image:"images/products-img/intermediate-composite-basketball.jpg",
    name:"Intermediate Size Basketball",
    rating:
    {
     star:"images/ratings/rating-4.0.png",
     count:127,

    },
    price:2095,


  },
  {
    image:"images/products-img/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name:"Adults Plain Cotton T-Shirt - 2 Pack",
    rating:
    {
     star:"images/ratings/rating-4.5.png",
     count:56,

    },
    price:799,


  }
];
let productsContainerElement=document.querySelector(".products-container");

let htmllines;

    
          products.forEach((value)=>{
            htmllines=
`<div class="product">
      <img src="${value.image}" class="productimgclass">
      <p class="producttextclass">${value.name}</p>
      <div class="ratings">
        <img src=${value.rating.star} class="ratingimgclass">
        <p class="ratings-count">${value.rating.count} </p>
      </div>
       <h3 class="price">
        $${(value.price/100).toFixed(2)} 
      </h3>
      <select class="quantityclass">
        <option value="-1">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="-1">4</option>
        <option value="-1">5</option>
        <option value="-1">6</option>
        <option value="-1">7</option>
        <option value="-1">8</option>
        <option value="-1">9</option>
        <option value="-1">10</option>
      </select>
      <button class="product-button-class">Add to cart</button>
      
    </div>`
    productsContainerElement.innerHTML+=htmllines;
    


          })
          

