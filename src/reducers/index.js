import products from "../api/products.json";

const initialState = { products };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;
    default:
      return state;
  }
};
