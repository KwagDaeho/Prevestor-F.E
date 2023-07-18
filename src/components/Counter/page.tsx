"use client";

import { useObservableState } from "src/hooks/useObservableState";
import numberStateService from "src/utils/obsState/numberStateService";

export const Counter = () => {
  const count = useObservableState({
    obs$: numberStateService.state$(),
  });
  const IncrementButton = () => {
    return (
      <button onClick={numberStateService.methods$.increment}>
        {" "}
        [ Increase ]
      </button>
    );
  };
  const DecrementButton = () => {
    return (
      <button onClick={numberStateService.methods$.decrement}>
        {" "}
        [ decrease ]
      </button>
    );
  };

  return (
    <div>
      <span>{count}</span>
      <div>
        <IncrementButton />
        <br />
        <DecrementButton />
      </div>
    </div>
  );
};

export default Counter;
