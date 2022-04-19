import "./App.css";
import { Footer } from "./components/UI/Footer/Footer";
import { Modal } from "./components/UI/Modal/Modal";
import { NavBar } from "./components/UI/NavBar/NavBar";
import { useModal } from "./context/modal-context";
import { useTheme } from "./context/theme-context";
import { Home } from "./pages/Home";

function App() {
  const { isDark } = useTheme();
  const {modalState} = useModal();
  return (
    <>
      <div className={`App ${modalState.isOpen && "fixed"}`} data-theme={isDark && "dark"}>
        <NavBar />
        <Home/>
        <Footer />
        {modalState.isOpen && <Modal/>}
      </div>
    </>
  );
}

export default App;
