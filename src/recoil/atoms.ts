import { atom } from "recoil";

export const countState = atom<number>({
  key: "CountState",
  default: 0,
});

export const numberState2 = atom<number>({
  key: "numberstate2",
  default: 5,
});
