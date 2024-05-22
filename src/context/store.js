import { create } from "zustand";
import { wishList } from "./wishList";
import { cart } from "./cart";
const useStore = create((set) => ({
  ...wishList(set),
  ...cart(set),
}));
export default useStore;
