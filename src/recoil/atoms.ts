import { atom } from "recoil";

export const countState = atom<number>({
  key: "CountState", // 전역적으로 고유한 값
  default: 0, // 초깃값
});

export const numberState2 = atom<number>({
  key: "numberstate2",
  default: 5,
});

export const isCashMode = atom<boolean>({
  key: "isCashMode",
  default: false,
})