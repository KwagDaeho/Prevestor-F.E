import { BehaviorSubject } from "rxjs";

const stringState$ = new BehaviorSubject<number>(0);
const stringStateService = {
  // observable
  state$: () => stringState$.asObservable(),

  // methods for state
  methods$: {},
};

export default stringStateService;
