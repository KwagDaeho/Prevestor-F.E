"use client";
import { styled } from "@mui/system";

type PropsType = {
  children: React.ReactNode;
};

const TestDiv = styled("div")`
  color: ${(props) => props.theme.palette.primary.main};
`;
function ExampleLayout({ children }: PropsType) {
  return (
    <TestDiv>
      <h1>It is Test Layout.</h1>
      {children}
    </TestDiv>
  );
}

export default ExampleLayout;
