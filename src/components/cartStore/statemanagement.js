import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],

  // 1. Add Item to Cart
  addToCart: (item) => {
    const existingItemIndex = get().cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...get().cartItems];
      updatedCart[existingItemIndex].quantity += item.quantity || 1;
      set({ cartItems: updatedCart });
    } else {
      set({
        cartItems: [
          ...get().cartItems,
          { ...item, quantity: item.quantity || 1 }
        ],
      });
    }
  },

  // 2. Clear Cart
  clearCart: () => {
    set({ cartItems: [] });
  },
  
  // 3. Update Item Quantity
  updateItemQuantity: (itemId, quantity) => {
    if (quantity < 1) {
      get().removeItemFromCart(itemId);
    } else {
      const updatedCart = get().cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      );
      set({ cartItems: updatedCart });
    }
  },

  // 4. Get Total Price
  getTotalPrice: () => {
    return get().cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toLocaleString();
  },

  // 5. Get Total Cart Quantity
  getTotalCartQuantity: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },

}));

export default useCartStore;
