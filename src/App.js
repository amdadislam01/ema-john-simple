import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Shop from './component/shop/Shop';
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notfound from './component/Notfounnd/Notfound';
import ProductDetail from './component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productKey" element={<ProductDetail />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
