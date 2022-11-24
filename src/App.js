import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import Category from './components/category/Category';
import CartList from './components/cartList/CartList';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/anon" element={<Main />} />
          <Route path="/anon/category/clothes" element={<Category />} />
          <Route path="/anon/category/shoes" element={<Category />} />
          <Route path="/anon/category/bags" element={<Category />} />
          <Route path="/anon/category/glasses" element={<Category />} />
          
          <Route path="/anon/cart" element={<CartList />} />          
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
