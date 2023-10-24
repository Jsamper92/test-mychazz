

function Layout(props: { children: JSX.Element, params: { locale: string } }) {
  const { children } = props;

  return <>{children}</>;
}

export default Layout;