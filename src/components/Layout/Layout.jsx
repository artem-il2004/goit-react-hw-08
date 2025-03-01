import AppBar from "../AppBar/AppBar";

function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}

export default Layout;
