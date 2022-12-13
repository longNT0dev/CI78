import SS2 from "./SS2/SS2";
import LanguageContextProvider from "./SS3/LanguageContextProvider";
import SS3 from "./SS3/SS3";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import NavigationPage from "./NavigationPage";
import TestCustomHook from "./SS4/TestCustomHook";
import SignUp from "./SS4/components/SignUp/SignUp";
import SignIn from "./SS4/components/Login/Login";
import Layout from "./SS4/components/Layout/Layout";

// Kiểm tra nếu người dùng đăng nhập rồi sẽ cho họ xem nội dung bài học
// Nếu chưa đăng nhập thì chuyển hướng tới trang đăng nhập
function App() {
  return (
    <div className="App">
      <Layout />
      {/* <SignIn /> */}
      {/* <Routes>

      </Routes> */}
    </div>

    // <LanguageContextProvider>
    //   <div className="App">
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <PrivateRoute>
    //             <NavigationPage />
    //           </PrivateRoute>
    //         }
    //       >
    //         <Route path="/SS2" element={<SS2 />} />
    //         <Route path="/SS3" element={<SS3 />} />
    //       </Route>

    //       <Route path="/login" element={<LoginPage />}></Route>
    //       <Route path="/custom-hook" element={<TestCustomHook />}></Route>
    //     </Routes>
    //   </div>
    // </LanguageContextProvider>
  );
}

export default App;

// prop drilling
// prop là 1 giá trị read-only
// global css reactjs
