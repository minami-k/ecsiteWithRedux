import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, CartDropdownButton, CartItemsContainer} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    {/* <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div> */}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

export default CartDropdown;
