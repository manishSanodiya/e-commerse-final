import React, { useState } from 'react';

const ShowCartContext = React.createContext({
  cartState: false,
  showCart: () => {},
  hideCart: () => {},
});

export const ShowCartContextProvider = (props) => {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <ShowCartContext.Provider
      value={{ cartState: showCart, showCart: showCartHandler, hideCart: hideCartHandler }}
    >
      {props.children}
    </ShowCartContext.Provider>
  );
};

export default ShowCartContext;