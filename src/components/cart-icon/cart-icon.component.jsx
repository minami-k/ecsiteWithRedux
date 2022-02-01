import React from 'react';

import {CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles'

const CartIcon = ({toggleCartHidden}) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <ItemCountContainer>0</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
