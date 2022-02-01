import React from 'react';

import { DirecotoryMenuContainer  } from './directory.styles';
import { directory } from 'assets/data/directory'

import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {

  render() {
    return ( 
      <DirecotoryMenuContainer>
        {directory.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} className={title}  />
        ))}
      </DirecotoryMenuContainer>
    );
  }
}

export default Directory;
