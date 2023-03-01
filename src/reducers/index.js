import products from "../api/products.json";

const initialState = { products };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, 
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product, 
              inCart: product.inCart + 1,
              inventory: product.inventory -1,
            }
          } else {
            return product
          }
        })
      };
    // Другой случай если в action type будет "CHEKOUT"
    case "CHECKOUT":
      return {
        ...state,
        products: state.products.map((product) => ({
          // Проверка на соответствие ID не нужно, 
          // т.к. нужно для всех объектов product сделать свойство inCart: 0.
          ...product, 
          inCart: 0
        }))
      }
    default:
      return state;
  }
};
