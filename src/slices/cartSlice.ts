import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export interface CartItem {
  cartId: string;
  productId: number;
  image: string;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  amount: number;
}

export interface CartState {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 30,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.cartId === newCartItem.cartId);

      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }

      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += newCartItem.amount * Number(newCartItem.price);

      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item adicionado ao carrinho');
    },

    removeToCart: (state, action: PayloadAction<CartItem>) => {
      const { cartId } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartId === cartId);

      if (!cartItem) return;

      state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= cartItem.amount * Number(cartItem.price);

      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item removido do carrinho');
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
      localStorage.removeItem('cart');
    },

    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { cartId } = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.cartId === cartId ? { ...item, amount: item.amount + 1 } : item,
      );

      state.numItemsInCart += 1;
      state.cartTotal += Number(action.payload.price);

      localStorage.setItem('cart', JSON.stringify(state));
    },

    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { cartId } = action.payload;
      state.cartItems;
      state.cartItems = state.cartItems
        .map((item) =>
          item.cartId === cartId ? { ...item, amount: item.amount - 1 } : item,
        )
        .filter((item) => item.amount > 0);

      state.numItemsInCart -= 1;
      state.cartTotal -= Number(action.payload.price);

      localStorage.setItem('cart', JSON.stringify(state));
    },

    calculateTotals: (state) => {
      state.orderTotal = state.cartTotal + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeToCart,
  clearCart,
  calculateTotals,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
