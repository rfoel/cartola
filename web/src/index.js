import React from 'react'
import { render } from 'react-dom'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import { Provider } from './utils/store'

import Router from './utils/router'
import './sass/index.css'

fontawesome.library.add(solid, brands)

render(
  <Provider>
    <Router />
  </Provider>,
  document.querySelector('#root')
)
