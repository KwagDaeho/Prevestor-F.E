import { DivPrimaryMain } from "src/components/MuiStyled/div";

type PropsType = {
  children: React.ReactElement;
};

function ExampleLayout({ children }: PropsType) {
  return (
    <DivPrimaryMain>
      <h1>It is Test Layout.</h1>
      {children}
    </DivPrimaryMain>
  );
}

export default ExampleLayout;
