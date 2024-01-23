
const product = [
   {
       id: 0,
       image: 'img/a.jpg',
       title: 'Advanced Night Repair Serum',
       price: 125,
   },
   {
       id: 1,
       image: 'img/b.jpg',
       title: 'Hair Perfector',
       price: 30,
   },
   {
       id: 2,
       image: 'img/c.jpg',
       title: 'Soft Matte Longwear Foundation',
       price: 32,
   },
   {
       id: 3,
       image: 'img/e.jpg',
       title: 'Shape Tape Concealer',
       price: 24,
   },
   {
    id: 4,
    image: 'img/f.jpg',
    title: 'Matte Lipstick',
    price: 30,
},
{
    id: 5,
    image: 'img/d.jpg',
    title: 'Fine Eyebrow Pencil',
    price: 25,
},
{
    id: 6,
    image: 'img/chanel.jpg',
    title: 'Les Beiges Healthy Glow Bronzing Cream',
    price: 164,
},
{
    id: 7,
    image: 'img/cleanser.jpg',
    title: 'Superfood Antioxidant Refillable Cleanser',
    price: 3,
},
{
    id: 8,
    image: 'img/dermalogica.jpg',
    title: 'Micellar Prebiotic Precleanse',
    price: 49,
},
{
    id: 9,
    image: 'img/fragrance1.jpg',
    title: 'Paradoxe Eau de Parfum',
    price: 125,
},
{
    id: 10,
    image: 'img/fragrance2.jpg',
    title: 'Vanilla',
    price: 125,
},
{
    id: 11,
    image: 'img/tan.jpg',
    title: 'The Express Hydrating Self-Tan Water',
    price: 48,

},
{
    id: 12,
    image: 'img/sunscreen.jpg',
    title: 'Ultra Light Sunscreen Fluid',
    price: 32,

},
{
    id: 13,
    image: 'img/fragrance5.jpg',
    title: 'Oud Wood',
    price: 185,

},
{
    id: 14,
    image: 'img/fragrance6.jpg',
    title: 'Guilty pour femme eau de parfum',
    price: 123,

},
{
    id: 15,
    image: 'img/fragrance7.jpg',
    title: 'Under the Lemon Trees',
    price: 160,

},
{
    id: 16,
    image: 'img/fragrance8.jpg',
    title: 'Sun Fruit Eau de Parfume',
    price: 155,

},


{
    id: 17,
    image: 'img/lipbalm.jpg',
    title: 'Balm Dotcom Lip Balm and Skin Salve',
    price: 14,

},
{
    id: 18,
    image: 'img/ordinary.png',
    title: 'Hyaluronic Acid 2% + B5',
    price: 9,

},
{
    id: 19,
    image: 'img/makeup1.jpg',
    title: 'NARS Cosmetics Foundation',
    price: 35,

},
{
    id: 20,
    image: 'img/makeup2.jpg',
    title: 'DIOR BACKSTAGE CONCEALER',
    price: 40,

},
{
    id: 21,
    image: 'img/makeup3.jpg',
    title: 'Uoma Beauty',
    price: 39,

},
{
    id: 22,
    image: 'img/makeup4.jpg',
    title: 'Gloss Bomb Universal Lip Luminizer',
    price: 20,

},
{
    id: 23,
    image: 'img/makeup5.jpg',
    title: 'Magic vanish color corrector',
    price: 32,

},
{
    id: 24,
    image: 'img/makeup6.jpg',
    title: 'Beauty luminous foundation',
    price: 69,

},
{
    id: 25,
    image: 'img/spray.jpg',
    title: 'Plump + Juicy Vegan Serum',
    price: 40,

},






];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
