export const cart = (set) => {
  return {
    arr: [],
    addToCart: (payload) => {
      set((state) => {
        let index = state.arr.findIndex((el) => el?.id === payload?.id);
        if (index < 0) {
          return {
            arr: (state.arr = [...state.arr, { ...payload, quantity: 1 }]),
          };
        } else {
          return {
            arr: (state.arr = state.arr.filter((el) => el.id !== payload.id)),
          };
        }
      });
    },
    incrementCartQuantity: (payload) => {
      set((state) => {
        let index = state.arr.findIndex((el) => el.id === payload.id);
        return {
          arr: (state.arr = state.arr?.map((item, inx) => {
            if (index === inx) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          })),
        };
      });
    },
    removeItemFromCart: (payload) => {
      set((state) => {
        return {
          arr: (state.arr = state.arr?.filter((el) => el.id !== payload.id)),
        };
      });
    },
    reset: () =>
      set((state) => {
        let update = (state.arr = []);
        return { arr: update };
      }),
  };
};
