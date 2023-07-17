type PropsType = {
  children: React.ReactNode;
};

function ExampleLayout({ children }: PropsType) {
  return <div>{children}</div>;
}

export default ExampleLayout;
