import './App.css';
import ProductsPage from './pages/ProductsPage';
import CreateProductPage from './pages/CreateProductPage';

function App() {
  return (
    <div className="App">
        <Route path="/" element={<ProductsPage />} />
        <Route path="/create" element={<CreateProductPage />} />
    </div>
  );
}

export default App;
