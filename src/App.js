import { HeroSection, Navbar } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="app flex-col">
      <Navbar />

      <HeroSection />
    </div>
  );
}

export default App;
