import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Layout() {

  // Dùng token của người dùng đi gọi dữ liệu 
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
