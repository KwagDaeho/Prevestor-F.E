import { BehaviorSubject } from "rxjs";

const numberState$ = new BehaviorSubject<number>(0);
const numberStateService = {
  // observable
  state$: () => numberState$.asObservable(),

  // methods for state
  methods$: {
    increment: () => numberState$.next(numberState$.value + 1),
    decrement: () => numberState$.next(numberState$.value - 1),
  },
};

export default numberStateService;
