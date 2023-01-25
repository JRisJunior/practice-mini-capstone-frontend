import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#products-index">All products</a> | <a href="#products-new">New product</a>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New recipe</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Price: <input type="text" />
        </div>
        <div>
          description: <input type="text" />
        </div>
        <div>
          Inventory: <input type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}

function ProductsIndex(props) {

  return (
    <div id="products-index">
      <h1>All Products</h1>

      {props['products'].map(product => (
        <div className="products" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.inventory}</p>
        </div>
      ))}

    </div>
  );

}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  const [products, setProdcuts] = useState([]);
 
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;