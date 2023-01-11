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

function ProductsIndex() {
  const [products, setProdcuts] = useState([
    {
      id: 1,
      name: "___",
      price: "___",
      description: "___",
      inventory: "___",
    },
    {
      id: 2,
      name: "___",
      price: "___",
      description: "___",
      inventory: "___",
    },
    {
      id: 3,
      name: "___",
      price: "___",
      description: "___",
      inventory: "___",
    },
  ]);

  return (
    <div id="products-index">
      <h1>All Products</h1>

      



    </div>
  )

}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
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