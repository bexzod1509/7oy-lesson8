export const wishList = (set) => {
  return {
    value: [],
    toggleLike: (payload) =>
      set((state) => {
        let index = state.value?.findIndex((el) => el.id === payload.id);
        if (index < 0) {
          return { value: (state.value = [...state.value, payload]) };
        } else {
          return {
            value: (state.value = state.value?.filter(
              (el) => el.id !== payload.id
            )),
          };
        }
      }),
  };
};
