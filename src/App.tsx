// import './App.css'
import { ThemeProvider } from "./components/theme-provider";
// import { NavbarDemo } from "./layouts/navbar";
import Dashboard from "./pages/dashboard";
import Idashboard from "./pages/dashboard/Idashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <NavbarDemo /> */}
      {/* <Dashboard /> */}
      <Idashboard />
    </ThemeProvider>
  );
}

export default App;
