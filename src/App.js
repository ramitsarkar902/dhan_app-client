import { About, HeroSection, Navbar } from "./components";
import "./app.scss";
function App() {
  return (
    <div className="app flex-col">
      <Navbar />

      <HeroSection />
      <About />
    </div>
  );
}

export default App;
