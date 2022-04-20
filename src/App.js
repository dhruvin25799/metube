import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components/Auth/RequiresAuth";
import { Footer } from "./components/UI/Footer/Footer";
import { Modal } from "./components/UI/Modal/Modal";
import { NavBar } from "./components/UI/NavBar/NavBar";
import { useModal } from "./context/modal-context";
import { useTheme } from "./context/theme-context";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { MyList } from "./pages/MyList/MyList";
import { ToastContainer } from "react-toastify";

function App() {
  const { isDark } = useTheme();
  const { modalState } = useModal();
  return (
    <>
      <div
        className={`App ${modalState.isOpen && "fixed"}`}
        data-theme={isDark && "dark"}
      >
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route
            path="/mylist"
            element={
              <RequiresAuth>
                <MyList />
              </RequiresAuth>
            }
          />
        </Routes>
        <Footer />
        {modalState.isOpen && <Modal />}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
