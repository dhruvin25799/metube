import "./App.css";
import { Footer } from "./components/UI/Footer/Footer";
import { NavBar } from "./components/UI/NavBar/NavBar";
import { useTheme } from "./context/theme-context";
import { Home } from "./pages/Home";

function App() {
  const { isDark } = useTheme();
  return (
    <>
      <div className="App" data-theme={isDark && "dark"}>
        <NavBar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
