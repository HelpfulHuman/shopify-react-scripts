import { combineReducers } from 'redux';

import cart from './cart';
import collection from './collection';
import product from './product';
import header from './header';
import data from './data';
import homepage from './homepage';
import page from './page';

const rootReducer = combineReducers({
  header,
  cart,
  collection,
  data,
  homepage,
  page,
  product,
});

export default rootReducer;
