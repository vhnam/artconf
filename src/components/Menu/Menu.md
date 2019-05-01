```js
import {BrowserRouter as Router} from 'react-router-dom';
import config from '../../config.js';
import MenuItem from '../MenuItem';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faTimes);

<Router>
  <div style={{position: 'relative', height: '43.75em'}}>
    <Menu>
      <MenuItem href={config.paths.home}>Home</MenuItem>
      <MenuItem href={config.paths.introduction}>Introduction</MenuItem>
      <MenuItem href={config.paths.schedule}>Schedule</MenuItem>
      <MenuItem href={config.paths.speakers}>Speakers</MenuItem>
      <MenuItem href={config.paths.gallery}>Gallery</MenuItem>
      <MenuItem href={config.paths.registration}>Registration</MenuItem>
    </Menu>
  </div>
</Router>;
```
