import React, { useContext, Suspense, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
// import Home from './pages/Home';
// import Store from './pages/Store';
// import About from './pages/About';
// import Login from './pages/Login';
// import ContactUs from './pages/ContactUs';
import Footer from './components/footer/Footer';
// import ProductDetail from './pages/ProductDetail';
import { ShowCartContextProvider } from './components/store/ShowCart-Context';
import { ProductContextProvider } from './components/store/product-context';
import loginContext from './components/store/login-context';
import LoadingSpinner from './components/UI/LoadingSpinner';
import cartContext from './components/store/cart-context';
import ShowCartContext from './components/store/ShowCart-Context';

const Home = React.lazy(() => import('./components/pages/Home'));
const Store = React.lazy(() => import('./components/pages/Store'));
const About = React.lazy(() => import('./components/pages/About'));
const Login = React.lazy(() => import('./components/pages/Login'));
const ContactUs = React.lazy(() => import('./components/pages/ContactUs'));
const ProductDetail = React.lazy(() => import('./components/pages/ProductDetail'));

function App() {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const {loginCartHandler} = cartCtx;
  const {isloggedIn} = loginCtx;

  // fetching cart data on refresh
  useEffect(() => {
    if (isloggedIn) {
      console.log('called');
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);

  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>
          <ShowCartContextProvider>
            <Route path='/product' exact>
              {loginCtx.isloggedIn && <Store productList={productsArr} />}
              {!loginCtx.isloggedIn && <Redirect to='/login' />}
            </Route>
          </ShowCartContextProvider>

          <Route path='/product/:productId'>
            {loginCtx.isloggedIn && <ProductDetail />}
            {!loginCtx.isloggedIn && <Redirect to='/login' />}
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/login'>
        {!loginCtx.isloggedIn && <Login />}
        {loginCtx.isloggedIn && <Redirect to='/home' />}
      </Route>

      <Footer />
    </Suspense>
  );
}

export default App;
