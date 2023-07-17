type PropsType = {
  children: React.ReactElement;
};

function Layout({ children }: PropsType) {
  return (
    <div>
      <h1>This is Market Page Layout.</h1>
      {children}
    </div>
  );
}

export default Layout;
