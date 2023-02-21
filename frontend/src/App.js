import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            {/* a component provided by the 'react-router-dom' library, and ":" in the URL path indicates that this part of 
            URL can be replaced with a variable value*/}
            <Route path="/product/:slug" element={<ProductScreen />} />
            {/* '/' stands for the home screen */}
            <Route path="/" element={<HomeScreen />} />{' '}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
