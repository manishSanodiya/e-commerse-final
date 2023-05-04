import React, { useContext } from 'react';

import classes from './Store.module.css';
import MusicAlbums from '../albums/MusicAlbums';
import Cart from '../cart/Cart';

import ShowCartContext from '../store/ShowCart-Context';

const Store = (props) => {
  const showCartCtx = useContext(ShowCartContext);

  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      {showCartCtx.cartState && <Cart onClick={showCartCtx.hideCart} />}
        <button className={classes.button} onClick={showCartCtx.showCart}>
          See the cart
        </button>
    </section>
  );
};

export default Store;