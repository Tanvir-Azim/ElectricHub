import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
//import Cart from './Cart'
import SingleProductPage from './SingleProductPage'
import ErrorPage from './ErrorPage'
import Header from './components/Header'
import Footer from './Footer'
import NewCart from './components/NewCart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProductPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/newcart' element={<NewCart/>}/>
        
      </Routes>
    <Footer/>

    </BrowserRouter>

    </>
  )
}

export default App
