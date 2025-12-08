import { create } from "zustand";

// values that don't need to persist across sessions
interface IStore {
  currentPic: number;
  setCurrentPic: (pic: number) => void;
}

const initialState = {
  currentPic: -1,
};

export const artStore = create<IStore>((set) => ({
  ...initialState,
  setCurrentPic: (pic: number) => set({ currentPic: pic }),
}));
