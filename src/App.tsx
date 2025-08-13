// import './App.css'
import { ThemeProvider } from "./components/theme-provider";
// import { NavbarDemo } from "./layouts/navbar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <NavbarDemo /> */}
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
