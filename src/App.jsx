 import { useState } from 'react'
import './App.css'

function App() {
  const data =[
    {
      productImage:
    "https://www.jiomart.com/images/product/original/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg?im=Resize=(500,630)",
      productName: "Rebook",
  },
  {
    productImage:
  "https://www.jiomart.com/images/product/original/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg?im=Resize=(500,630)",
    productName: "Puma",
  },
  {
    productImage:
  "https://www.jiomart.com/images/product/original/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg?im=Resize=(500,630)",
    productName: "Levis",
  },
  {
    productImage:
  "https://www.jiomart.com/images/product/original/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg?im=Resize=(500,630)",
    productName: "Bata",
  },
  ];
  const [product, setProduct]= useState([])
  const [inCart, setInCart]= useState(0);
setTimeout(() => {
  setProduct(data)
}, 1000);

   return(
     <div className="app">
    <div className="cart-comp">
      <h3>Cart {inCart}</h3>
    </div>

    <div className="cart-area">
      {product?.map((prod, idx) =>(
  <ProductCard
     key={idx}
     productImg={prod.productImage}
     productName={prod.productName}
     inCart={inCart}
     setInCart={setInCart}
  />
        ))}
    </div>
  </div>
   )
   
}

export default App

function ProductCard({productImg, productName, inCart, setInCart}){
  const [show, setshow]= useState(true)
  

const handleAdd = () =>{
  setshow(!show)
  setInCart(inCart + 1);
};

const handlRemove = () =>{
  setshow(!show)
  setInCart(inCart - 1);
}

return(
    <div className="card-component">
      <img src={productImg} alt="no data"/>
      <h3>{productName}</h3>
      {show === true?
      <button onClick={handleAdd}>Add</button>:
      <button onClick={handlRemove}>Remove</button>
      }
    </div>
  )
 }

