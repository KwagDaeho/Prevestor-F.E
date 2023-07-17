// 'use client';

import { Subject } from "rxjs";

// Props의 Type 선언
interface PropsType {
  num1?: number;
  num2?: number;
  num3?: number;
}

const counter$ = new Subject<string>();
const Counter = {
  // observable
  onCounter$: () => counter$.asObservable(),
  // set
  increment: () => counter$.next("increment"),
  decrement: () => counter$.next("decrement"),
};

export default Counter;
