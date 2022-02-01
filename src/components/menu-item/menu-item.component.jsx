import React from 'react';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentSubTitle, ContentTitle} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, className }) => (
  <MenuItemContainer>
    <BackgroundImageContainer imageUrl={imageUrl}/>
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItem;
