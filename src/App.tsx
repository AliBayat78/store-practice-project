import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import ProductsProvider from './context/ProductsProvider'

function App() {
  return (
    <ProductsProvider>
      <div className="App overflow-x-hidden">
        <Navbar />
        <Main />
      </div>
    </ProductsProvider>
  )
}

export default App
