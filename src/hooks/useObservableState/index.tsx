import { useEffect, useState } from "react";
import { Observable, Subscription } from "rxjs";
interface ObservableState {
  <T, K = T>(props: ObservableStateProps<T, K> & { initialState?: undefined }):
    | T
    | K
    | undefined;
  <T, K = T>(props: ObservableStateProps<T, K>): T | K;
}
interface ObservableStateProps<T, K> {
  obs$: Observable<T>;
  input$?: (input$: Observable<T>) => Observable<K>;
  initialState?: T | (() => T);
}
export const useObservableState: ObservableState = <T, K>({
  obs$,
  input$,
  initialState,
}: ObservableStateProps<T, K>) => {
  const [state, setState] = useState<T | K | undefined>(initialState);
  useEffect(() => {
    let observableState$: Subscription;
    if (input$) {
      observableState$ = obs$.pipe(input$).subscribe(setState);
    } else {
      observableState$ = obs$.subscribe(setState);
    }
    return () => observableState$ && observableState$.unsubscribe();
  }, [obs$, input$]);
  return state;
};
