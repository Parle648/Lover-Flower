import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import ProductPage from '../pages/ProductPage/ProductPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import PaySuccess from '../pages/PaySuccess/PaySuccess';
import PayWrong from '../pages/PayWrong/PayWrong';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import FAQPage from '../pages/FAQPage/FAQPage';
import '../Scss/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/:id' element={<ProductPage />}></Route>
          <Route path='/order' element={<OrderPage />}></Route>
          <Route path='/paysuccess' element={<PaySuccess />}></Route>
          <Route path='/paywrong' element={<PayWrong />}></Route>
          <Route path='/delivery' element={<DeliveryPage />}></Route>
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/contacts' element={<ContactsPage />}></Route>
          <Route path='/questions' element={<FAQPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
