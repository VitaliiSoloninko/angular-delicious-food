const BASE_URL = 'https://expressjs-delicious-food-production.up.railway.app';

// const BASE_URL = environment.production
// //   ? 'https://angular-food-cafe-47fx.onrender.com'
//   : 'https://angular-food-cafe-47fx.onrender.com';

// https://angular-food-cafe-47fx.onrender.com
// http://localhost:5000

// Foods, Tags, Search
export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = BASE_URL + '/api/foods/tags';
export const FOODS_BY_SEARCH_URL = BASE_URL + '/api/foods/search/';
export const FOODS_BY_TAG_URL = BASE_URL + '/api/foods/tag/';
export const FOODS_BY_ID_URL = BASE_URL + '/api/foods/';

// Authentication
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

// Order
export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = BASE_URL + '/api/orders/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL =
  BASE_URL + '/api/orders/newOrderForCurrentUser';
export const ORDER_PAY_URL = BASE_URL + '/api/orders/pay';
export const ORDER_TRACK_URL = BASE_URL + '/api/orders/track/';
