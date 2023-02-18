import data from './data'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((
            product /*it uses a map() function to loop through an array of products stored in data object*/,
          ) => (
            /*it is important to include a `key` attribute when rendering a list of items, as it allows React to effeciently update the DOM when items are added, removed, or rearranged*/
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>

                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
