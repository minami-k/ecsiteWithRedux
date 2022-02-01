import React from 'react';
import { Link } from 'react-router-dom';

import { OptionContainer, OptionLink } from './header.styles';
import logo from 'assets/images/ClothingYa.png';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';



const Header = () => {
  const [hidden, setHidden] = React.useState(true)

  const toggleCartHidden = () => {
    setHidden(prevState => !prevState)
  }

  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} alt="Logo" />
    </Link>
    <OptionContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/signin'>
        SIGN IN
      </OptionLink>

      <CartIcon toggleCartHidden={toggleCartHidden} />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </div>
)};

export default Header;
